import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Card.module.css';
import Image from 'next/image';
import Liked from '../../public/image/liked.svg';
import UnLiked from '../../public/image/unliked.svg';
import Verified from '../../public/image/verified.svg';
import { useRouter } from 'next/router';
import { CardProps } from './types';

const FormCard = (props: CardProps) => {
  const { variant, title, region, price, image, currency, like = false } = props;
  const router = useRouter();
  const [favorite, setFavorite] = useState<boolean>(like);

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
          <Image src={image} className={styles.image} layout="fill" alt="card background" />
        </div>
        <div className={styles.badgeWrapper}>
          <div className={`${classNames([styles.dangerBadge, styles.badgeAnime])} relative w-[21px] h-[21px]`}>
            {favorite ? (
              <Image src={Liked} layout="fill" alt="liked" onClick={() => setFavorite(!favorite)} />
            ) : (
              <Image src={UnLiked} layout="fill" alt="unliked" onClick={() => setFavorite(!favorite)} />
            )}
          </div>
          <div className={styles.primaryBadge}>
            <span className={styles.counter}>{price}</span>
            <Image src={`/image/token/${currency}.svg`} width={18} height={18} layout="fixed" />
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textTitle}>{title}</div>
        <div className={styles.region}>
          <p className={styles.textRegion}>{region}</p>
          <Image src={Verified} width={18} height={18} layout="fixed" alt="verify notification" />
        </div>
      </div>
    </div>
  );
};

export default FormCard;
