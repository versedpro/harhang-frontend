import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
import { useState } from 'react';

const ProfileEdition: NextPage = () => {
  const router = useRouter();
  const [avatar, setAvatar] = useState();
  const [banner, setBanner] = useState();

  const onChangeAvatar = (e: any) => {
    e.preventDefault();
    console.log('file picture');
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const onChangeBanner = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setBanner(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div className="container mx-auto">
      <div className="relative ml-[26px] top-[88px] cursor-pointer z-[10]" onClick={() => router.back()}>
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
            <div className="relative w-[100px] h-[100px]">
              {!avatar ? (
                <Image src={ProfilePicture} layout="fixed" alt="current avatar" />
              ) : (
                <Image className="rounded-full object-cover" src={avatar} layout="fill" alt="updated avatar" />
              )}
            </div>
            <div className="relative">
              <label htmlFor="avatar" className="cursor-pointer">
                <Image src={UploadPicture} width={100} height={100} layout="fixed" alt="upload" />
              </label>
              <input type="file" name="avatar" id="avatar" className="hidden" onChange={onChangeAvatar} />
            </div>
          </div>
          {/* Profile Banner */}
          <div className="flex flex-col md:flex-row items-center py-6 pr-16 gap-6 w-full">
            <p className="font-medium text-[27px] leading-[34px] text-shades-0">Banner:</p>
            <div className="flex flex-col gap-3">
              <div className="relative w-[872px] h-[212px]">
                {!banner ? (
                  <Image src={BannerBg} className="object-cover" layout="fill" alt="current banner" />
                ) : (
                  <Image src={banner} className="object-cover" layout="fill" alt="uploaded banner" />
                )}
              </div>
              <div className="relative">
                <label htmlFor="banner" className="cursor-pointer">
                  <Image src={UploadBanner} width={872} height={212} layout="fixed" alt="upload banner" />
                </label>
                <input type="file" name="banner" id="banner" className="hidden" onChange={onChangeBanner} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdition;
