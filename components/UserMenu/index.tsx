import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import styles from './UserMenu.module.css';
import { useAddress, useMetamask, useDisconnect } from '@thirdweb-dev/react';
import { IconContext } from 'react-icons/lib';
import { TbWallet } from 'react-icons/tb';

export default function UserMenu() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.bar}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <img
              className={styles.notification}
              src="/image/notifications.svg"
              alt="notifications"
              style={{ cursor: 'pointer' }}
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
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    <img src="/image/dot.png" alt="unread" width={9} className="mr-2" />
                    <img src="/image/pp-1.png" alt="user" className="mr-4" />
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
        <div className={styles.profile}>
          <img src="/image/pp.png" alt="user" onClick={() => disconnectWallet()} />
        </div>
      ) : (
        <div className={styles.profileUnconnected}>
          <IconContext.Provider value={{ color: '#317EF7', className: 'w-10 h-10' }}>
            <TbWallet onClick={() => connectWithMetamask()} />
          </IconContext.Provider>
          {/* <img src="/image/pp.png" alt="user" onClick={() => connectWithMetamask()} /> */}
        </div>
      )}
    </div>
  );
}
