import { MdArrowForwardIos } from 'react-icons/md';

interface SettingMenuProps {
  title: string;
}

export default function SettingMenu({ title }: SettingMenuProps) {
  return (
    <div className="flex flex-row items-center w-full p-6 gap-6 bg-primary-100 rounded-xl">
      <p className="font-medium text-[27px] leading-[34px] text-shades-0">{title}</p>
      <MdArrowForwardIos className="text-shades-0" />
    </div>
  );
}
