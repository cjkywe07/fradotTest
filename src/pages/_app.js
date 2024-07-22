import { PortfolioProvider } from "@/content/content";
import { prefix } from "@/config/config";
import GlobalStyle from "@/styles/global.styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <PortfolioProvider value={{ prefix }}>
            <Head>
                <title>FRADOT</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </PortfolioProvider>
    );
}
