import styles from './Container.module.css';
import { useRouter } from 'next/router';
import Card from '../Card/GeoCard';

interface Item {
  title: string;
  region: string;
  price: number;
  currency: string;
  image: string;
  like: boolean;
}

export default function Container({ items }: { items: Item[] }) {
  const router = useRouter();

  return (
    <section className={styles.itemContainer}>
      <div className={styles.layout}>
        {items.map((element, index) => (
          <Card
            key={index}
            title={element.title}
            price={element.price}
            region={element.region}
            currency={element.currency}
            image={element.image}
            like={element.like}
          />
        ))}
      </div>
    </section>
  );
}
