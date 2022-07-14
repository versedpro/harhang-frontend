import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MediaRenderer, useActiveListings, useMarketplace } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import { cards } from '../data';
import Container from '../components/Container';
import LinkIcon from '../public/image/link.svg';
import CardsFilter from '../public/image/cards-button.png';
import StampsFilter from '../public/image/stamps-button.png';

const Home: NextPage = () => {
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const marketplace = useMarketplace(
    '' // Your marketplace contract address here
  );

  const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);

  return (
    <div className="container mx-auto">
      {/* Content */}
      <div className="mx-6">
        {/* Follow section */}
        <div className="pt-40">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-row sl:flex-col items-center gap-3">
              <p className={styles.linkTitle}>You follow</p>
              <Image src={LinkIcon} width={33} height={33} layout="fixed" alt="link icon" />
            </div>
            <div className="flex flex-row items-center gap-8">
              <Image src={CardsFilter} className="cursor-pointer" width={171} height={44} layout="fixed" alt="filter" />
              <Image
                src={StampsFilter}
                className="cursor-pointer"
                width={171}
                height={44}
                layout="fixed"
                alt="filter"
              />
            </div>
          </div>
          <Container items={cards} />
        </div>

        {/* Trending section */}
        <div className="pt-8">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-row sl:flex-col items-center gap-3">
              <p className={styles.linkTitle}>Trending</p>
              <Image src={LinkIcon} width={33} height={33} layout="fixed" alt="link icon" />
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
            <div className="flex flex-row sl:flex-col items-center gap-3">
              <p className={styles.linkTitle}>Around You</p>
              <Image src={LinkIcon} width={33} height={33} layout="fixed" alt="link icon" />
            </div>
            {/* <div className="flex flex-row items-center">
              <img src="/image/cards-button.png" style={{ cursor: 'pointer' }} />
              <img src="/image/stamps-button.png" className="ml-8" style={{ cursor: 'pointer' }} />
            </div> */}
          </div>
          <Container items={cards} />
        </div>
      </div>
    </div>
  );
};

export default Home;
