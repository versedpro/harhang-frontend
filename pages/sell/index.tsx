import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Sell.module.css';

const Sell: NextPage = () => {
  const router = useRouter();

  const { variant, title, currency, image, like, price, region } = router.query;

  return (
    <div className="flex mx-auto pt-32 w-full">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="relative mr-3 rounded-2xl w-[333.56px] h-[593px]">
          <Image src={`${image}`} layout="fill" alt="card image" />
        </div>
        <div className={`relative mr-5 rounded-2xl w-[333.56px] h-[593px] bg-primary-500 ${styles.detail}`}></div>
      </div>
    </div>
  );
};

export default Sell;
