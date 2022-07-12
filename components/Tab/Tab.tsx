import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

interface TabsProps {
  lists: string[];
  className?: string;
  children: React.ReactNode[];
}

export default function Tabs({ lists, className, children }: TabsProps) {
  return (
    <Tab.Group>
      <Tab.List>
        <div className={`flex flex-row gap-[40px] ${className} border-x-0 border-b-4 border-neutral-200 border-solid`}>
          {lists.map((list, index) => (
            <Tab key={index} as={Fragment}>
              {({ selected }) => (
                <div
                  className={`${
                    selected ? 'text-primary-400' : 'text-shades-0'
                  } bg-background border-none focus:outline-none font-bold cursor-pointer text-[27px] leading-[34px]`}
                >
                  {list}
                </div>
              )}
            </Tab>
          ))}
        </div>
      </Tab.List>
      <Tab.Panels>
        {children.map((child, index) => (
          <Tab.Panel key={index}>{child}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
