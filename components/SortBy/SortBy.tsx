import { Fragment, forwardRef, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import styles from './SortBy.module.css';
import { keys, SortByProps } from './types';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { SortByKey } from '.';

const SortBy = (props: SortByProps) => {
  const { selected, onChange } = props;
  const [selectedKey, setSelectedKey] = useState<SortByKey>(selected ? selected : keys.HIGHTOLOW);

  const handleSelect = async (key: string) => {
    switch (key) {
      case keys.HIGHTOLOW:
        await setSelectedKey(key);
        break;
      case keys.LOWTOHIGH:
        await setSelectedKey(key);
        break;
      case keys.DATE:
        await setSelectedKey(key);
        break;
      case keys.LIKES:
        await setSelectedKey(key);
        break;
      default:
        break;
    }
    onChange(key);
  };

  return (
    <div className="flex flex-row sl:flex-col items-center">
      <Menu as="div" className="relative inline-block">
        {({ open }) => (
          <>
            <Menu.Button className={`${styles.sortButton} ${open ? 'rounded-b-none' : 'rounded-b-[5px]'}`}>
              <>
                Sort by: {selectedKey}
                {open ? (
                  <IoIosArrowUp className="ml-2 -mr-1 h-5 w-5 text-shades-100 hover:text-shades-100" />
                ) : (
                  <IoIosArrowDown className="ml-2 -mr-1 h-5 w-5 text-shades-100 hover:text-shades-100" />
                )}
              </>
            </Menu.Button>

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
                {Object.values(keys).map((key, index) => {
                  return (key as SortByKey) === selectedKey ? null : (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-blue-500 text-shades-100' : 'text-shades-100'
                          } group flex w-full items-center justify-center rounded-md px-2 py-2 text-[19px] leading-[24px] font-bold`}
                          onClick={() => handleSelect(key)}
                        >
                          <p>Sort by: {key}</p>
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default SortBy;
