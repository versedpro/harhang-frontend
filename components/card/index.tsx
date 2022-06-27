import React from 'react';
import classNames from 'classnames';
import styles from './card.module.css';

const Card = ({
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
          <img src={image} className={styles.image} alt="card background" />
        </div>
        <div className={styles.badgeWrapper}>
          <div className={classNames([styles.dangerBadge, styles.badgeAnime])}>
            {like ? <img src="/image/liked.svg" /> : <img src="/image/unliked.svg" />}
          </div>
          <div className={styles.primaryBadge}>
            <span className={styles.counter}>{price}</span>
            <img src={`/image/token/${currency}.svg`} />
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textTitle}>{title}</div>
        <div className={styles.region}>
          <p className={styles.textRegion}>{region}</p>
          <img src="/image/verified.svg" alt="verify notification" />
        </div>
      </div>
    </div>
  );
};

export default Card;
