import { useAddress, useMetamask, useDisconnect } from '@thirdweb-dev/react';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';
import SearchBar from './Search';
import NavigateBar from './Navigate';
import UserMenu from './UserMenu';

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className="container mx-auto">
      <nav className={styles.header}>
        <div className="flex flex-col md:flex-row w-full mx-6 justify-between items-center">
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link href="/" passHref role="button">
                <img src={`/logo.png`} alt="Harfang Logo" width={58.91} style={{ cursor: 'pointer' }} />
              </Link>
            </div>
            <SearchBar />
          </div>
          <div className={styles.right}>
            <NavigateBar />
            <UserMenu />
          </div>
        </div>
      </nav>
    </div>
  );
}
