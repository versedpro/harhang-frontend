import Image from 'next/image';
import Link from 'next/link';
import Avatar from '../public/image/pp.png';
import Verified from '../public/image/verified.svg';
import ProfileEdit from '../public/image/edit.svg';
import ProfileSetting from '../public/image/setting.svg';

export default function UserDetail() {
  const userAddress = '0xaeD9djFiL8aeD9djFiL8aeD9djFiL8aeD9djFiL8';

  return (
    <div className="flex flex-row md:flex-col items-center gap-1 w-full md:w-[222px] justify-center">
      {/* User avatar */}
      <div className="relative border-[5px] border-solid border-primary-400 rounded-full">
        <Image src={Avatar} width={200} height={200} layout="fixed" alt="User avatar" />
      </div>
      {/* Username */}
      <div className="flex flex-row gap-[7px] items-center">
        <p className={`text-foreground font-medium text-[27px] leading-[34px]`}>Username</p>
        <Image src={Verified} width={29} height={29} layout="fixed" alt="verfied badge" />
      </div>
      {/* User address */}
      <p className={`text-primary-400 font-medium items-center text-[27px] leading-[34px]`}>
        {userAddress.slice(0, 9).concat('...').concat(userAddress.slice(-4))}
      </p>
      {/* Edit and Setting buttons */}
      <div className="flex flex-row gap-[10px]">
        <Link href="/edit_profile" passHref>
          <div className="relative">
            <Image src={ProfileEdit} width={32} height={32} layout="fixed" alt="Edit button" />
          </div>
        </Link>
        <Link href="/setting" passHref>
          <div className="relative">
            <Image src={ProfileSetting} width={32} height={32} layout="fixed" alt="Setting button" />
          </div>
        </Link>
      </div>
    </div>
  );
}
