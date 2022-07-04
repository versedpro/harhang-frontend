import { Fragment, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import styles from './Create.module.css';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { MediaRenderer, useActiveListings, useMarketplace } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import BingMapsReact from '../../components/Map';
import ImageUpload from '../../components/ImageUpload';
import CardInformation from '../../components/CardInformation';
import { Button } from '../../components/Button';
import { CreatingProcess } from '../../components/CreatingProcess';

const Create: NextPage = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [place, setPlace] = useState<any>(null);
  const [card, setCard] = useState<any>(null);
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);

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

  const onHandleUpload = async (value: boolean) => {
    await setIsImageUploaded(value);
    setStep(3);
  };

  const onHandleSubmit = () => {
    setStep(4);
  };

  const onHandleCreate = () => {
    setStep(5);
  };

  return (
    <div className="mx-6">
      <div className="mx-auto pt-40 w-full">
        {step === 1 ? (
          <>
            {/* Map section */}
            <div className={styles.title}>Choose a location</div>
            <BingMapsReact setPlace={setPlace} />
            <div className="flex justify-end">
              <Button title="Locate" onClick={onHandleLocate} />
            </div>
          </>
        ) : step === 2 ? (
          <>
            <div className={styles.title}>Upload your image</div>
            <ImageUpload setCard={setCard} card={card} isUploaded={onHandleUpload} />
          </>
        ) : step === 3 ? (
          <>
            <div className={styles.title}>Fill the information</div>
            <CardInformation setStep={onHandleSubmit} />
          </>
        ) : (
          <>
            <div className={styles.title}>Creating your Card</div>
            <CreatingProcess setStep={onHandleCreate} />
          </>
        )}
      </div>
    </div>
  );
};

export default Create;
