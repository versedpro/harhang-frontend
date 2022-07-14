import { Fragment, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MediaRenderer, useActiveListings, useMarketplace } from '@thirdweb-dev/react';
import styles from './Send.module.css';
import BingMapsReact from '../../components/Map';
import ImageUpload from '../../components/ImageUpload';
import CardInformation from '../../components/CardInformation';
import { Button } from '../../components/Button';
import { CreatingProcess } from '../../components/CreatingProcess';
import DummyBackground from '../../public/image/pisa.png';
import { FaTwitterSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Clipboard from '../../components/Clipboard';
import ImgUpload from '../../public/image/Img-Upload-Default.png';
import TextInput from '../../components/Input/TextInput';
import TextArea from '../../components/Input/TextArea';

const Send: NextPage = () => {
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
        <div className="flex flex-col md:flex-row justify-center">
          <div className="mr-20">
            <Image src={ImgUpload} width={312} height={562.77} layout="fixed" alt="upload" />
          </div>
          <div className="md:w-[600px]">
            <div>
              <TextInput title="to" />
            </div>
            <div className="my-16 h-[200px]">
              <TextArea title="message" />
            </div>
            <div className="float-right mt-5">
              <Button title="Send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
