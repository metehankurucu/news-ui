// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/index.css';
import { Fonts } from '../fonts';

const theme = extendTheme({
    colors: {
        primary: '#E31421',
        default: '#494949',
        secondary: '#08002F',
        youtube: {
            500: '#FF0000',
        },
        instagram: {
            500: '#E1306C',
        },
    },
    fonts: {
        heading: 'Inter',
        body: 'Inter',
    },
});

function Application({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default Application;
