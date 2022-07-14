import Image from 'next/image';
import styles from './Activity.module.css';
import MintIcon from '../../public/image/cross-regular.svg';
import TransferIcon from '../../public/image/transfer.svg';
import OfferIcon from '../../public/image/cart.svg';
import ListIcon from '../../public/image/pin.svg';
import { ActivityItemProps, variants } from './types';

export default function ActivityItem(props: ActivityItemProps) {
  const { variant, from, to, price, currency, time } = props;

  const Icon =
    variant === variants.MINT
      ? MintIcon
      : variant === variants.TRANSFER
      ? TransferIcon
      : variant === variants.OFFER
      ? OfferIcon
      : variant === variants.LIST
      ? ListIcon
      : undefined;

  return (
    <div className={styles.itemBox}>
      <div className={styles.icon}>
        <Image src={Icon} width={24} height={24} layout="fixed" alt="activity icon" />
      </div>
      {/* variant */}
      <p className="text-base text-shades-0 font-medium">{variant}</p>
      {/* price */}
      <div className="flex flex-row">
        {price ? <p className="text-sm text-shades-0 font-normal mr-1">{price}</p> : null}
        {/* currency */}
        {currency ? (
          <Image src={`/image/token/${currency}.svg`} width={18} height={18} layout="fixed" alt="coin" />
        ) : null}
      </div>
      {/* from */}
      {from && from.length === 42 ? (
        <p className="text-sm text-primary-400 font-normal">{from.slice(0, 5).concat('...').concat(from.slice(-4))}</p>
      ) : from ? (
        <p className="text-sm text-primary-400 font-normal">{from}</p>
      ) : null}
      {/* to */}
      {to && to.length === 42 ? (
        <p className="text-sm text-primary-400 font-normal">{to.slice(0, 5).concat('...').concat(to.slice(-4))}</p>
      ) : to ? (
        <p className="text-sm text-primary-400 font-normal">{to}</p>
      ) : null}
      {/* time */}
      <p className="text-sm text-shades-0 font-normal">{time}</p>
    </div>
  );
}
