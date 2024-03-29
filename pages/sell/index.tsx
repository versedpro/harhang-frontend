import React, { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Sell.module.css';
import DummyStamp from '../../public/image/stamp1.png';
import Verified from '../../public/image/verifed-yellow.svg';
import DummyMap from '../../public/image/map1.png';
import Liked from '../../public/image/liked.svg';
import Unliked from '../../public/image/unliked.svg';
import Share from '../../public/image/share-blue.svg';
import { Button } from '../../components/Button';
import { ActivityItem } from '../../components/Activity';
import { Activities, Comments } from '../../data';
import MainPP from '../../public/image/pp-big.png';
import TextArea from '../../components/Input/TextArea';
import { Comment } from '../../components/Comment';

const Sell: NextPage = () => {
  const router = useRouter();
  const { variant, title, currency, image, like, price, region } = router.query;

  const [favorite, setFavorite] = useState<boolean>(like === 'true');

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center pt-32 mx-6 md:mx-14">
        <div className="flex flex-col md:flex-row justify-around">
          {/* Background section */}
          <div className="relative rounded-2xl w-[333.56px] h-[593px]">
            <Image src={`${image}`} width={333.56} height={593} layout="fixed" alt="card image" />
          </div>
          {/* Card detail section */}
          <div className={styles.detailBox}>
            <div className="flex flex-row">
              <div className="flex flex-col relative w-[54px] h-[96px] mr-6">
                <Image src={DummyStamp} className="rounded-lg" layout="fill" alt="dummy stamp" />
                <div className="relative -bottom-24 text-shades-100 text-sm">8 of 667</div>
              </div>
              <div className="flex flex-col">
                <p className={styles.name}>{title}</p>
                <p className={styles.creator}>
                  Creator: <span className="flex items-center text-secondary-400 ml-2 mr-1">username</span>
                  <Image src={Verified} width={18} height={18} layout="fixed" alt="verified badge" />
                </p>
                <p className={styles.creator}>Created: 12 dec 2021</p>
              </div>
            </div>
            <div className="w-full text-shades-100 text-sm mt-4 mb-1">
              Dolorem corporis sint at. Aut ex nostrum at ad iusto. Impedit molestiae vitae iste commodi exercitationem
              modi qui quis qui. Nulla voluptas ab quisquam dolores. Nulla et omnis voluptatem architecto sequi odit
              aliquam officiis eveniet.
            </div>
            <div>
              <p className={styles.region}>{region}</p>
              <Image src={DummyMap} width={281} height={281} layout="fixed" alt="map" />
            </div>
          </div>
          {/* Activies section */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <p className={styles.owners}>
                Owners:<span className="text-primary-400 ml-2">22</span>
              </p>
              <p className={styles.owners}>Ends in 16 days</p>
            </div>
            <div className="flex flex-row justify-between items-center my-3">
              <div className="flex items-center">
                <p className={styles.price}>500</p>
                <Image src={`/image/token/${currency}.svg`} width={50} height={50} layout="fixed" alt="token" />
              </div>
              <div className="flex flex-row items-center gap-4">
                <Button title="Buy" />
                <Image
                  src={favorite ? Liked : Unliked}
                  className="cursor-pointer"
                  width={58.93}
                  height={55}
                  layout="fixed"
                  alt="like"
                  onClick={() => setFavorite(!favorite)}
                />
                <Image src={Share} className="cursor-pointer" width={47.4} height={52.46} layout="fixed" alt="share" />
              </div>
            </div>
            <div className="w-full my-1 flex flex-col gap-3">
              {Activities.map((activity, index) => (
                <ActivityItem
                  key={index}
                  variant={activity.variant}
                  from={activity.from}
                  to={activity.to}
                  time={activity.time}
                  price={activity.price}
                  currency={activity.currency}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 w-full md:w-[688px]">
          <div className="flex flex-row justify-between gap-6">
            {/* User comment section */}
            <div className="relative">
              <Image src={MainPP} width={100} height={100} layout="fixed" alt="user" />
            </div>
            <div className="w-full md:w-[556px]">
              <div className="h-[93px] mb-3">
                <TextArea />
              </div>
              <div className="float-right">
                <Button title="Comment" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 my-6">
            {Comments.map((comment, index) => (
              <Comment key={index} avatar={comment.avatar} content={comment.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
