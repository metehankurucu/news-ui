import React from 'react';
import Head from 'next/head';
import { Box, BoxProps } from '@chakra-ui/react';
import Navbar from './navbar';
import styles from '../constants/styles';
import Footer from './Footer';

type Props = {
    title?: string;
} & BoxProps;

const Layout: React.FC<Props> = ({ children, title = 'Modern News', ...props }) => (
    <Box>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Box>
            <header>
                <Navbar />
            </header>
            <Box as="main" minH={'80vh'} maxW={styles.mainMaxWidth} marginX="auto" {...props}>
                {children}
            </Box>
            <Footer />
        </Box>
    </Box>
);

export default Layout;
