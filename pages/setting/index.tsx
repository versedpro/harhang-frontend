import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SettingMenu } from '../../components/SettingMenu';
import UserDetail from '../../components/UserDetail';
import UserSocials from '../../components/UserSocials';

const Settings: NextPage = () => {
  const userAddress = '0xaeD9djFiL8aeD9djFiL8aeD9djFiL8aeD9djFiL8';

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-[10px] pt-[152px] pb-[180px]">
        {/* User detail section */}
        <div className="flex flex-col gap-8 mx-16">
          <UserDetail />
          <UserSocials />
        </div>
        {/* Setting Menu section */}
        <div className="flex flex-col gap-6 p-[10px] w-full">
          <Link href="/edit_profile">
            <a>
              <SettingMenu title="Edit Profile" />
            </a>
          </Link>
          <a target="_blank" href="https://notion.com">
            <SettingMenu title="Request Verification" />
          </a>
          <a target="_blank" href="https://notion.com">
            <SettingMenu title="CGU" />
          </a>
          <a target="_blank" href="https://notion.com">
            <SettingMenu title="Privacy Policy" />
          </a>
          <a target="_blank" href="https://notion.com">
            <SettingMenu title="Documentation" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
