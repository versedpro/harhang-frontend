import { Fragment, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import styles from './create.module.css';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { MediaRenderer, useActiveListings, useMarketplace } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import BingMapsReact from 'bingmaps-react';

const Create: NextPage = () => {
  const router = useRouter();

  return (
    <div className="mx-6">
      {/* Map section */}
      <div className="mx-auto pt-40 w-full">
        <div className={styles.title}>Choose a location</div>
        <BingMapsReact
          height="670.56px"
          bingMapsKey="AtX6MlcR2y6S7nioFZbnCen9vBj9mEssBUxozRkd2SoTKAKWsfCCBRf87_H_9X3S"
          mapOptions={{
            navigationBarMode: 'square'
          }}
          viewOptions={{
            center: { latitude: 42.360081, longitude: -71.058884 },
            mapTypeId: 'road'
          }}
        />
      </div>
      <div className="flex justify-end">
        <button className={styles.locateButton}>Locate</button>
      </div>
    </div>
  );
};

export default Create;
