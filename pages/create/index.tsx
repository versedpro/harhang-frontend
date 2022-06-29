import { Fragment, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import styles from './Create.module.css';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { MediaRenderer, useActiveListings, useMarketplace } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import BingMapsReact from '../../components/Map';

const Create: NextPage = () => {
  const router = useRouter();

  return (
    <div className="mx-6">
      {/* Map section */}
      <div className="mx-auto pt-40 w-full">
        <div className={styles.title}>Choose a location</div>
        <BingMapsReact />
      </div>
      <div className="flex justify-end">
        <button className={styles.locateButton}>Locate</button>
      </div>
    </div>
  );
};

export default Create;
