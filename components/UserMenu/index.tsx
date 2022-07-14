import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './UserMenu.module.css';
import { useAddress, useMetamask, useDisconnect } from '@thirdweb-dev/react';
import { IconContext } from 'react-icons/lib';
import { TbWallet } from 'react-icons/tb';
import Notificaiton from '../../public/image/notifications.svg';
import Dot from '../../public/image/dot.png';
import PeopleOne from '../../public/image/pp-1.png';
import PeopleMain from '../../public/image/pp.png';

export default function UserMenu() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.bar}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <Image
              className={styles.notification}
              src={Notificaiton}
              width={48}
              height={48}
              layout="fixed"
              alt="notifications"
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
          <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 bg-white focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2`}
                  >
                    <Image src={Dot} width={9} height={9} layout="fixed" alt="dot" />
                    <Image src={PeopleOne} width={50} height={50} layout="fixed" alt="user" />
                    <p className={styles.message}>user.lens</p>&nbsp;
                    <p>follwed you!</p>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {address ? (
        // <>
        //   <a className={styles.secondaryButton} onClick={() => disconnectWallet()}>
        //     Disconnect Wallet
        //   </a>
        //   <p style={{ marginLeft: 8, marginRight: 8, color: 'grey' }}>|</p>
        //   <p>{address.slice(0, 6).concat('...').concat(address.slice(-4))}</p>
        // </>
        <div className="cursor-pointer" onClick={() => disconnectWallet()}>
          <Image src={PeopleMain} width={64} height={64} layout="fixed" alt="profile" />
        </div>
      ) : (
        <div className="border-2 border-solid rounded-full border-primary-400 p-[10px] w-16 h-16">
          <IconContext.Provider value={{ color: '#317EF7', className: 'w-10 h-10' }}>
            <TbWallet onClick={() => connectWithMetamask()} />
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
}
