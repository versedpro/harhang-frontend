import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SettingMenu } from '../../components/SettingMenu';
import UserDetail from '../../components/UserDetail';
import UserSocials from '../../components/UserSocials';
import { MdUndo } from 'react-icons/md';
import TextInput from '../../components/Input/TextInput';
import TextArea from '../../components/Input/TextArea';
import Instagram from '../../public/image/instagram.svg';
import Twitter from '../../public/image/twitter.svg';
import Discord from '../../public/image/discord.svg';
import Pinterest from '../../public/image/pinterest.svg';
import Dribble from '../../public/image/dribble.svg';
import Behance from '../../public/image/behance.svg';
import ProfilePicture from '../../public/image/pp.png';
import UploadPicture from '../../public/image/upload-circle.svg';
import BannerBg from '../../public/image/profile-bg.png';
import UploadBanner from '../../public/image/upload-banner.png';

const ProfileEdition: NextPage = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto">
      <div className="relative left-[26px] top-[88px] cursor-pointer z-[10]" onClick={() => router.back()}>
        <MdUndo className="text-shades-0" size={64} />
      </div>
      <div className="flex flex-col md:flex-row gap-[10px] pt-[152px] pb-[64px] isolate">
        {/* User detail section */}
        <div className="flex flex-col gap-8 mx-16 py-32">
          <UserDetail />
          <UserSocials />
        </div>
        {/* Edition section */}
        <div className="flex flex-col gap-6 p-[10px] w-full">
          {/* User detail fields */}
          <p className="py-6 font-bold text-[39px] leading-[49px] text-shades-0">Edit Profile</p>
          <div className="flex flex-row items-center py-6 gap-6">
            <p className="font-medium text-shades-0 text-[27px] leading-[34px]">Username:</p>
            <div className="w-full md:w-[312px]">
              <TextInput />
            </div>
          </div>
          <div className="flex flex-row items-center py-6 gap-6">
            <p className="font-medium text-shades-0 text-[27px] leading-[34px]">Bio:</p>
            <div className="w-full xl:w-[938px]">
              <TextArea />
            </div>
          </div>
          {/* Social fields */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-bold text-[33px] leading-[41px] text-shades-0">Socials:</p>
            <div className="flex flex-row gap-6">
              <div className="flex flex-row items-center py-6 gap-3">
                <div className="flex relative items-center">
                  <Image src={Twitter} width={30} height={30} layout="fixed" alt="twitter" />
                </div>
                <p className="font-medium text-shades-0 text-[27px] leading-[34px]">Twitter:</p>
                <div className="w-full md:w-[365px]">
                  <TextInput />
                </div>
              </div>
              <div className="flex flex-row items-center py-6 gap-3">
                <div className="flex relative items-center">
                  <Image src={Instagram} width={30} height={30} layout="fixed" alt="instagram" />
                </div>
                <p className="font-medium text-shades-0 text-[27px] leading-[34px]">Instagram:</p>
                <div className="w-full md:w-[320px]">
                  <TextInput />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-row items-center py-6 gap-3">
                <div className="flex relative items-center">
                  <Image src={Discord} width={30} height={30} layout="fixed" alt="discord" />
                </div>
                <p className="font-medium text-shades-0 text-[27px] leading-[34px]">Discord:</p>
                <div className="w-full md:w-[356px]">
                  <TextInput />
                </div>
              </div>
              <div className="flex flex-row items-center py-6 gap-3">
                <div className="flex relative items-center">
                  <Image src={Pinterest} width={30} height={30} layout="fixed" alt="pinterest" />
                </div>
                <p className="font-medium text-shades-0 text-[27px] leading-[34px]">Pinterest:</p>
                <div className="w-full md:w-[339px]">
                  <TextInput />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-row items-center py-6 gap-3">
                <div className="flex relative items-center">
                  <Image src={Dribble} width={30} height={30} layout="fixed" alt="dribble" />
                </div>
                <p className="font-medium text-shades-0 text-[27px] leading-[34px]">Dribble:</p>
                <div className="w-full md:w-[360px]">
                  <TextInput />
                </div>
              </div>
              <div className="flex flex-row items-center py-6 gap-3">
                <div className="flex relative items-center">
                  <Image src={Behance} width={30} height={30} layout="fixed" alt="behance" />
                </div>
                <p className="font-medium text-shades-0 text-[27px] leading-[34px]">Behance:</p>
                <div className="w-full md:w-[345px]">
                  <TextInput />
                </div>
              </div>
            </div>
          </div>
          {/* Profile picture */}
          <div className="flex flex-row py-6 gap-6 items-center">
            <p className="font-medium text-[27px] leading-[34px] text-shades-0">Profile Picture:</p>
            <div className="relative">
              <Image src={ProfilePicture} width={100} height={100} layout="fixed" alt="current avatar" />
            </div>
            <div className="relative">
              <Image src={UploadPicture} width={100} height={100} layout="fixed" alt="upload" />
            </div>
          </div>
          {/* Profile Banner */}
          <div className="flex flex-col md:flex-row items-center py-6 pr-16 gap-6 w-full">
            <p className="font-medium text-[27px] leading-[34px] text-shades-0">Banner:</p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Image src={BannerBg} width={872} height={212.03} layout="fixed" alt="current banner" />
              </div>
              <div className="relative">
                <Image src={UploadBanner} width={872} height={212} layout="fixed" alt="upload banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdition;
