import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ProfileBanner from '../../public/image/profile-bg.png';
import Avatar from '../../public/image/pp.png';
import Verified from '../../public/image/verified.svg';
import ProfileEdit from '../../public/image/edit.svg';
import ProfileSetting from '../../public/image/setting.svg';
import Followers from '../../public/image/group.svg';
import Likes from '../../public/image/red-heart.svg';
import Instagram from '../../public/image/instagram.svg';
import Twitter from '../../public/image/twitter.svg';
import Discord from '../../public/image/discord.svg';
import Pinterest from '../../public/image/pinterest.svg';
import Dribble from '../../public/image/dribble.svg';
import Behance from '../../public/image/behance.svg';
import { Tab } from '../../components/Tab';
import Container from '../../components/Container';
import { cards } from '../../data';

const Profile: NextPage = () => {
  const userAddress = '0xaeD9djFiL8aeD9djFiL8aeD9djFiL8aeD9djFiL8';
  const cardLists = ['Collected', 'Created', 'Liked'];

  return (
    <div className="container mx-auto">
      {/* Profile Banner */}
      <div className="absolute w-full h-[340px] top-[88px] left-0">
        <div className="container relative w-full h-[340px]">
          <Image src={ProfileBanner} layout="fill" alt="Profile banner" />
        </div>
      </div>
      {/* User Information section */}
      <div className="mx-16 mb-16 flex flex-row justify-between pt-[88px]">
        {/* Detail section */}
        <div className="flex flex-col md:flex-row md:pt-[232px] gap-[32px]">
          <div className="flex flex-row md:flex-col items-center gap-1 w-full md:w-[222px] justify-center">
            {/* User avatar */}
            <div className="relative border-[5px] border-solid border-primary-400 rounded-full">
              <Image src={Avatar} width={200} height={200} alt="User avatar" />
            </div>
            {/* Username */}
            <div className="flex flex-row gap-[7px] items-center">
              <p className="text-foreground font-medium text-[27px] leading-[34px]">Username</p>
              <Image src={Verified} width={29} height={29} layout="fixed" alt="verfied badge" />
            </div>
            {/* User address */}
            <p className="text-primary-400 font-medium items-center text-[27px] leading-[34px]">
              {userAddress.slice(0, 9).concat('...').concat(userAddress.slice(-4))}
            </p>
            {/* Edit and Setting buttons */}
            <div className="flex flex-row gap-[10px]">
              <Link href="/profileedit">
                <div className="relative cursor-pointer">
                  <Image src={ProfileEdit} width={32} height={32} layout="fixed" alt="Edit button" />
                </div>
              </Link>
              <Link href="/setting">
                <div className="relative cursor-pointer">
                  <Image src={ProfileSetting} width={32} height={32} layout="fixed" alt="Setting button" />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:pt-[124px] gap-1">
            <div className="flex flex-row p-[10px] gap-6">
              {/* Followers */}
              <div className="flex flex-row justify-center gap-[10px]">
                <p className="text-foreground font-medium text-[16px] leading-[20px]">1200</p>
                <Image src={Followers} width={29} height={20} layout="fixed" alt="user followers" />
              </div>
              {/* Likes */}
              <div className="flex flex-row gap-[10px]">
                <p className="text-foreground font-medium text-[16px] leading-[20px]">15k</p>
                <Image src={Likes} width={29} height={20} layout="fixed" alt="user followers" />
              </div>
            </div>
            {/* Sub info */}
            <div className="flex flex-row p-[10px] gap-[10px] w-full md:w-[407px] h-[140px]">
              <p className="text-shades-0 font-normal items-center text-[16px] leading-[24px]">
                Sunt voluptatem aliquam maxime ad laudantium autem quia. Eveniet doloremque numquam quo. Iste sed nemo
                qui delectus mollitia rerum magni modi. Culpa dolorum non ea. Reprehenderit earum voluptas quidem. Dolor
                itaque amet vitae.
              </p>
            </div>
          </div>
        </div>
        {/* Social section */}
        <div className="flex flex-row justify-center items-center gap-6 pt-[224px]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[10px]">
              <Link href={`https://www.twitter.com/`}>
                <Image src={Twitter} width={30} height={30} layout="fixed" alt="twitter" />
              </Link>
              <Link href={`https://www.instagram.com/`}>
                <Image src={Instagram} width={30} height={30} layout="fixed" alt="twitter" />
              </Link>
              <Link href={`https://www.discord.com/`}>
                <Image src={Discord} width={30} height={30} layout="fixed" alt="twitter" />
              </Link>
            </div>
            <div className="flex flex-row gap-[10px]">
              <Link href={`https://www.pinterest.com/`}>
                <Image src={Pinterest} width={30} height={30} layout="fixed" alt="twitter" />
              </Link>
              <Link href={`https://www.dribble.com/`}>
                <Image src={Dribble} width={30} height={30} layout="fixed" alt="twitter" />
              </Link>
              <Link href={`https://www.behance.com/`}>
                <Image src={Behance} width={30} height={30} layout="fixed" alt="twitter" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* User's cards section */}
      <div className="mx-6">
        <Tab lists={cardLists} className="mx-10 py-4">
          <Container items={cards} />
          <Container items={cards} />
          <Container items={cards} />
        </Tab>
      </div>
    </div>
  );
};

export default Profile;
