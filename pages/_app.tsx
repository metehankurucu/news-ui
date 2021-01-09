// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/index.css';
import { Fonts } from '../fonts';
import { Chakra } from '../Chakra';

function Application({ Component, pageProps }: AppProps) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Component {...pageProps} />
        </Chakra>
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

export { getServerSideProps } from '../Chakra';

export default Application;
