import React, { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Card.module.css';
import { CardProps } from './types';

const GeoCard = ({ variant, title, region, price, image, currency, like }: CardProps) => {
  const router = useRouter();
  const [favorite, setFavorite] = useState<boolean>(false);

  const onSell = () => {
    router.push({
      pathname: '/sell',
      query: {
        variant: variant,
        title: title,
        region: region,
        price: price,
        image: image,
        currency: currency,
        like: favorite
      }
    });
  };

  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.header}>
        <div className={styles.imageWrapper} onClick={onSell}>
          <Image src={image} className={styles.image} layout="fill" alt="Geo image" />
        </div>
        <div className={styles.geoBadgeWrapper}>
          <div className={classNames([styles.dangerBadge, styles.badgeAnime, 'relative w-[21px] h-[21px]'])}>
            {favorite ? (
              <Image src="/image/liked.svg" layout="fill" onClick={() => setFavorite(!favorite)} alt="liked" />
            ) : (
              <Image src="/image/unliked.svg" layout="fill" onClick={() => setFavorite(!favorite)} alt="unliked" />
            )}
          </div>
          <div className={styles.geoCrossBadge}>
            <Image src={`/image/cross.svg`} width={21} height={21} layout="fixed" alt="cross badge" />
          </div>
        </div>
      </div>
      <div className={styles.getTextWrapper}>
        <div className={styles.geoDivide}></div>
        <div className={classNames([styles.textTitle, 'ml-2 pt-1'])}>{title}</div>
        <div className={classNames([styles.region, 'ml-2 pt-1'])}>
          <p className={styles.textRegion}>{region}</p>
          <Image src="/image/verified.svg" width={18} height={18} layout="fixed" alt="verify notification" />
        </div>
      </div>
    </div>
  );
};

export default GeoCard;
