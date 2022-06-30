import { Fragment, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import styles from './Create.module.css';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { MediaRenderer, useActiveListings, useMarketplace } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import BingMapsReact from '../../components/Map';
import ImageUpload from '../../components/ImageUpload';

const Create: NextPage = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [place, setPlace] = useState<any>(null);
  const [card, setCard] = useState<any>(null);

  useEffect(() => {
    if (place && place.location.latitude && place.location.longitude) {
      setCard({
        location: {
          latitude: place.location.latitude,
          ongitude: place.location.longitude
        }
      });
    }
  }, [place]);

  const onHandleLocate = () => {
    setStep(2);
  };

  return (
    <div className="mx-6">
      {step === 1 ? (
        <>
          {/* Map section */}
          <div className="mx-auto pt-40 w-full">
            <div className={styles.title}>Choose a location</div>
            <BingMapsReact setPlace={setPlace} />
          </div>
          <div className="flex justify-end">
            <button className={styles.locateButton} onClick={onHandleLocate}>
              Locate
            </button>
          </div>
        </>
      ) : (
        <>
          <ImageUpload setCard={setCard} card={card} />
        </>
      )}
    </div>
  );
};

export default Create;
