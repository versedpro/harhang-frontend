import { Fragment, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import styles from './Collection.module.css';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { MediaRenderer, useActiveListings, useMarketplace } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import cards from '../../data/cards';
import Container from '../../components/Container';
import { IconContext } from 'react-icons/lib';
import { TbChevronDown } from 'react-icons/tb';

const Collection: NextPage = () => {
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const marketplace = useMarketplace(
    '0x277C0FB19FeD09c785448B8d3a80a78e7A9B8952' // Your marketplace contract address here
  );

  const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);

  return (
    <div className="mx-6">
      {/* Follow section */}
      <div className="pt-40">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-row sl:flex-col items-center">
            <Menu as="div" className="relative inline-block text-right">
              <div>
                <Menu.Button className={styles.sortButton}>
                  Sort by: Low to high
                  <img
                    className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                    src="/image/dropdown-arrow.svg"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className={styles.sortItems}>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-blue-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2`}
                        >
                          <p>Low to high</p>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-blue-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2`}
                        >
                          <p>Created by</p>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="flex flex-row items-center">
            <img src="/image/cards-button.png" style={{ cursor: 'pointer' }} />
            <img src="/image/stamps-button.png" className="ml-8" style={{ cursor: 'pointer' }} />
          </div>
        </div>
        <Container items={cards} />
      </div>
    </div>
  );
};

export default Collection;
