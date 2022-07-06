import React from 'react';
import classNames from 'classnames';
import styles from './Card.module.css';
import Image from 'next/image';
import Liked from '../../public/image/liked.svg';
import UnLiked from '../../public/image/unliked.svg';
import Verified from '../../public/image/verified.svg';

const FormCard = ({
  title,
  region,
  price,
  image,
  currency,
  like
}: {
  title: string;
  region: string;
  price: number;
  image: string;
  currency: string;
  like: boolean;
}) => {
  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <Image src={image} className={styles.image} layout="fill" alt="card background" />
        </div>
        <div className={styles.badgeWrapper}>
          <div className={`${classNames([styles.dangerBadge, styles.badgeAnime])} w-[22.5px] h-[21px]`}>
            {like ? (
              <Image src={Liked} layout="fill" alt="liked" />
            ) : (
              <Image src={UnLiked} layout="fill" alt="unliked" />
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
