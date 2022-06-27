import React from 'react';
import type { AppProps } from 'next/app';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Harfang</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="NFT Marketplace based on Lens Protocol" />
        <meta
          name="keywords"
          content="Thirdweb, Marketplace, NFT Marketplace Tutorial, NFT Auction Tutorial, How To Make OpenSea"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThirdwebProvider>
  );
}

export default MyApp;
