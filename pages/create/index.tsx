import { Fragment, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MediaRenderer, useActiveListings, useMarketplace } from '@thirdweb-dev/react';
import styles from './Create.module.css';
import BingMapsReact from '../../components/Map';
import ImageUpload from '../../components/ImageUpload';
import CardInformation from '../../components/CardInformation';
import { Button } from '../../components/Button';
import { CreatingProcess } from '../../components/CreatingProcess';
import DummyBackground from '../../public/image/pisa.png';
import { FaTwitterSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Clipboard from '../../components/Clipboard';

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
            <div className="flex justify-end mt-5">
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
        ) : step === 4 ? (
          <>
            <div className={styles.title}>Creating your Card</div>
            <CreatingProcess setStep={onHandleCreate} />
          </>
        ) : (
          <>
            <div className={styles.title}>Card created!</div>
            <div className="flex justify-center">
              <div className="flex flex-col">
                <Image src={DummyBackground} width="461.25" height="752" layout="fixed" />
                <div className="flex flex-row items-center mt-6">
                  <div className={styles.subtitle}>Copy link:</div>
                  <Clipboard text="https://harfang.io/card/0x2666659">
                    <div className={styles.link}>https://harfang.io/card/0x2666659</div>
                  </Clipboard>
                  <IconContext.Provider value={{ color: '#1D9BF0', size: '44px' }}>
                    <Link href={`https://www.twitter.com/`}>
                      <FaTwitterSquare />
                    </Link>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Create;
