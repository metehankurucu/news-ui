import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './navbar';
import styles from '../constants/styles';

type Props = {
    title?: string;
};

const Layout: React.FC<Props> = ({ children, title = 'This is the default title' }) => (
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
            <Box as="main" minH={'80vh'} maxW={styles.mainMaxWidth} marginX="auto">
                {children}
            </Box>
            <footer>
                <hr />
                <span>I'm here to stay (Footer)</span>
            </footer>
        </Box>
    </Box>
);

export default Layout;
