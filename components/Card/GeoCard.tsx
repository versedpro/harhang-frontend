import React from 'react';
import classNames from 'classnames';
import styles from './Card.module.css';

const GeoCard = ({
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
          <img src={image} className={styles.image} alt="Geo image" />
        </div>
        <div className={styles.geoBadgeWrapper}>
          <div className={classNames([styles.dangerBadge, styles.badgeAnime])}>
            {like ? <img src="/image/liked.svg" /> : <img src="/image/unliked.svg" />}
          </div>
          <div className={styles.geoCrossBadge}>
            <img src={`/image/cross.svg`} width={21} />
          </div>
        </div>
      </div>
      <div className={styles.getTextWrapper}>
        <div className={styles.geoDivide}></div>
        <div className={classNames([styles.textTitle, 'ml-2 pt-1'])}>{title}</div>
        <div className={classNames([styles.region, 'ml-2 pt-1'])}>
          <p className={styles.textRegion}>{region}</p>
          <img src="/image/verified.svg" alt="verify notification" />
        </div>
      </div>
    </div>
  );
};

export default GeoCard;
