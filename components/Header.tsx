import { useAddress, useMetamask, useDisconnect } from '@thirdweb-dev/react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SearchBar from './Search';
import NavigateBar from './Navigate';
import UserMenu from './UserMenu';
import Logo from '../public/logo.png';

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className="bg-background fixed w-full z-[99]">
      <div className="w-full flex items-center md:h-[88px] container mx-auto">
        <div className={styles.header}>
          <div className="flex flex-col md:flex-row w-full mx-6 justify-between items-center">
            <div className={styles.left}>
              <div className={styles.logo}>
                <Link href="/" passHref role="button">
                  <div className="relative w-[58.91px] h-[64px] cursor-pointer">
                    <Image src={Logo} layout="fill" alt="logo" />
                  </div>
                </Link>
              </div>
              <SearchBar />
            </div>
            <div className={styles.right}>
              <NavigateBar />
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
