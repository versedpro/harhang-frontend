import { useState } from 'react';
import { Switch } from '@headlessui/react';
import styles from './Input.module.css';

interface ToggleProps {
  title: string;
  checked: boolean;
  setValue: any;
}

export default function Toggle({ title, checked, setValue }: ToggleProps) {
  // const [enabled, setEnabled] = useState<boolean>(checked);

  // const onHandleToggle = async () => {
  //   await setEnabled(!enabled);
  //   setValue(!enabled);
  // };

  return (
    <div className="flex flex-row items-center">
      <label className={styles.inputTitle}>{title}:</label>
      <Switch
        checked={checked}
        onChange={setValue}
        className={`${
          checked ? 'bg-blue-200' : 'bg-gray-200'
        } relative inline-flex h-3.5 w-12 items-center rounded-full`}
      >
        <span className="sr-only">{title}</span>
        <span
          className={`${
            checked ? 'translate-x-6 bg-blue-500' : 'translate-x-1 bg-gray-500'
          } inline-block h-6 w-6 transform rounded-full`}
        />
      </Switch>
    </div>
  );
}
