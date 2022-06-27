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
        {/* Top Section */}
        {/* <h1 className={styles.h1}>NFT Marketplace w/ thirdweb + Next.JS</h1>
        <p className={styles.explain}>
          Build an NFT marketplace using{" "}
          <b>
            {" "}
            <a
              href="https://thirdweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >
              thirdweb
            </a>
          </b>{" "}
          to list your ERC721 and ERC1155 tokens for auction or for direct sale.
        </p>

        <hr className={styles.divider} />

        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/create">
            <a className={styles.mainButton} style={{ textDecoration: "none" }}>
              Create A Listing
            </a>
          </Link>
        </div> */}

        <div>
          <Container items={cards} />
        </div>
      </div>
    </>
  );
};

export default Home;
