import React from 'react';
import { ChakraProvider, cookieStorageManager, extendTheme, localStorageManager } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import theme from './styles/theme';

interface Props {
    cookies: string;
}

export const Chakra: React.FC<Props> = ({ cookies, children }) => {
    const colorModeManager = typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager;
    return (
        <ChakraProvider theme={extendTheme(theme)} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    return {
        props: {
            cookies: req.headers.cookie ?? '',
        },
    };
};
