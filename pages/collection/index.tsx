import type { NextPage } from 'next';
import { MediaRenderer, useActiveListings, useMarketplace } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { cards } from '../../data';
import Container from '../../components/Container';
import SortBy from '../../components/SortBy/SortBy';
import { useState } from 'react';
import CardsFilter from '../../public/image/cards-button.png';
import StampsFilter from '../../public/image/stamps-button.png';

const Collection: NextPage = () => {
  const router = useRouter();
  const [selectedSort, setSelectedSort] = useState<string>();

  // Connect your marketplace smart contract here (replace this address)
  const marketplace = useMarketplace(
    '0x277C0FB19FeD09c785448B8d3a80a78e7A9B8952' // Your marketplace contract address here
  );

  const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);

  const onSelect = (key: string) => {
    setSelectedSort(key);
  };

  return (
    <div className="container mx-auto">
      <div className="mx-6">
        <div className="pt-40">
          <div className="flex flex-col justify-between md:flex-row">
            <SortBy onChange={onSelect} />
            <div className="flex flex-row items-center gap-8">
              <Image src={CardsFilter} className="cursor-pointer" width={171} height={44} layout="fixed" alt="filter" />
              <Image
                src={StampsFilter}
                className="cursor-pointer"
                width={171}
                height={44}
                layout="fixed"
                alt="filter"
              />
            </div>
          </div>
          <Container items={cards} />
        </div>
      </div>
    </div>
  );
};

export default Collection;
