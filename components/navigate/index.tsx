import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './navigate.module.css';

export default function NavigateBar() {

  return (
    <div 
      className={styles.bar}
    >
      <Link href='/'>
        <div className={styles.iconBox}>
          <img
          src='/icon-home.svg'
          alt='homepage'
          style={{ cursor: 'pointer' }}
        />
        </div>
      </Link>
      <Link href='/collection'>
        <div className={styles.iconBox}>
          <img
          src='/icon-collection.svg'
          alt='collection'
          style={{ cursor: 'pointer' }}
        />
        </div>
      </Link>
      <Link href='/plus'>
        <div className={styles.iconBox}>
          <img
          src='/icon-plus.svg'
          alt='create'
          style={{ cursor: 'pointer' }}
        />
        </div>
      </Link>
      <Link href='/send'>
        <div className={styles.iconBox}>
          <img
          src='/icon-send.svg'
          alt='send'
          style={{ cursor: 'pointer' }}
        />
        </div>
      </Link>
      <Link href='/map'>
        <div className={styles.iconBox}>
          <img
          src='/icon-map.svg'
          alt='map'
          style={{ cursor: 'pointer' }}
        />
        </div>
      </Link>
    </div>
  )
}