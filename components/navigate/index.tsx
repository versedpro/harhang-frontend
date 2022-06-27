import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './navigate.module.css';

export default function NavigateBar() {
  return (
    <div className={styles.bar}>
      <Link href="/">
        <div className={styles.iconBox}>
          <img src="/image/icon-home.svg" alt="homepage" style={{ cursor: 'pointer' }} />
        </div>
      </Link>
      <Link href="/collection">
        <div className={styles.iconBox}>
          <img src="/image/icon-collection.svg" alt="collection" style={{ cursor: 'pointer' }} />
        </div>
      </Link>
      <Link href="/plus">
        <div className={styles.iconBox}>
          <img src="/image/icon-plus.svg" alt="create" style={{ cursor: 'pointer' }} />
        </div>
      </Link>
      <Link href="/send">
        <div className={styles.iconBox}>
          <img src="/image/icon-send.svg" alt="send" style={{ cursor: 'pointer' }} />
        </div>
      </Link>
      <Link href="/map">
        <div className={styles.iconBox}>
          <img src="/image/icon-map.svg" alt="map" style={{ cursor: 'pointer' }} />
        </div>
      </Link>
    </div>
  );
}
