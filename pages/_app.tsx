// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
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

export { getServerSideProps } from '../Chakra';

export default Application;
