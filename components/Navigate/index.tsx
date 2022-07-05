import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Navigate.module.css';

export default function NavigateBar() {
  return (
    <div className={styles.bar}>
      <Link href="/">
        <div className={styles.iconBox} style={{ cursor: 'pointer' }}>
          <img src="/image/icon-home.svg" alt="homepage" />
        </div>
      </Link>
      <Link href="/collection">
        <div className={styles.iconBox} style={{ cursor: 'pointer' }}>
          <img src="/image/icon-collection.svg" alt="collection" />
        </div>
      </Link>
      <Link href="/create">
        <div className={styles.iconBox} style={{ cursor: 'pointer' }}>
          <img src="/image/icon-plus.svg" alt="create" />
        </div>
      </Link>
      <Link href="/send">
        <div className={styles.iconBox} style={{ cursor: 'pointer' }}>
          <img src="/image/icon-send.svg" alt="send" />
        </div>
      </Link>
      <Link href="/map">
        <div className={styles.iconBox} style={{ cursor: 'pointer' }}>
          <img src="/image/icon-map.svg" alt="map" />
        </div>
      </Link>
    </div>
  );
}
