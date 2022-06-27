import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { MediaRenderer, useActiveListings, useMarketplace } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import Card from '../components/card';
import cards from '../data/cards';
import Container from '../components/container';

const Home: NextPage = () => {
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const marketplace = useMarketplace(
    '0x277C0FB19FeD09c785448B8d3a80a78e7A9B8952' // Your marketplace contract address here
  );

  const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);

  return (
    <>
      {/* Content */}
      <div className="container mx-auto">
        {/* Follow section */}
        <div className="pt-40">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-row sl:flex-col items-center">
              <p className={styles.linkTitle}>You follow</p>
              <img
                className={styles.extraLink}
                src="/image/link.svg"
                onClick={() => window.open('/follow', '_blnak')}
              />
            </div>
            <div className="flex flex-row items-center">
              <img src="/image/cards-button.png" style={{ cursor: 'pointer' }} />
              <img src="/image/stamps-button.png" className="ml-8" style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <Container items={cards} />
        </div>

        {/* Trending section */}
        <div className="pt-8">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-row sl:flex-col items-center">
              <p className={styles.linkTitle}>Trending</p>
              <img
                className={styles.extraLink}
                src="/image/link.svg"
                onClick={() => window.open('/trending', '_blnak')}
              />
            </div>
            {/* <div className="flex flex-row items-center">
              <img src="/image/cards-button.png" style={{ cursor: 'pointer' }} />
              <img src="/image/stamps-button.png" className="ml-8" style={{ cursor: 'pointer' }} />
            </div> */}
          </div>
          <Container items={cards} />
        </div>

        {/* Around section */}
        <div className="pt-8">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-row sl:flex-col items-center">
              <p className={styles.linkTitle}>Around You</p>
              <img
                className={styles.extraLink}
                src="/image/link.svg"
                onClick={() => window.open('/around_you', '_blnak')}
              />
            </div>
            {/* <div className="flex flex-row items-center">
              <img src="/image/cards-button.png" style={{ cursor: 'pointer' }} />
              <img src="/image/stamps-button.png" className="ml-8" style={{ cursor: 'pointer' }} />
            </div> */}
          </div>
          <Container items={cards} />
        </div>
      </div>
    </>
  );
};

export default Home;
