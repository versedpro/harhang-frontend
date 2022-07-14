import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navigate.module.css';
import HomeIcon from '../../public/image/icon-home.svg';
import CollectionIcon from '../../public/image/icon-collection.svg';
import PlusIcon from '../../public/image/icon-plus.svg';
import SendIcon from '../../public/image/icon-send.svg';
import MapIcon from '../../public/image/icon-map.svg';

export default function NavigateBar() {
  return (
    <div className={styles.bar}>
      <Link href="/">
        <div className={styles.iconBox}>
          <Image src={HomeIcon} width={32} height={32} layout="fixed" alt="homepage" />
        </div>
      </Link>
      <Link href="/collection">
        <div className={styles.iconBox}>
          <Image src={CollectionIcon} width={32} height={32} layout="fixed" alt="collection page" />
        </div>
      </Link>
      <Link href="/create">
        <div className={styles.iconBox}>
          <Image src={PlusIcon} width={32} height={32} layout="fixed" alt="create page" />
        </div>
      </Link>
      <Link href="/send">
        <div className={styles.iconBox}>
          <Image src={SendIcon} width={32} height={32} layout="fixed" alt="send page" />
        </div>
      </Link>
      <Link href="/map">
        <div className={styles.iconBox}>
          <Image src={MapIcon} width={32} height={32} layout="fixed" alt="map page" />
        </div>
      </Link>
    </div>
  );
}
