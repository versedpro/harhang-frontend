import Image from 'next/image';
import Link from 'next/link';
import Instagram from '../public/image/instagram.svg';
import Twitter from '../public/image/twitter.svg';
import Discord from '../public/image/discord.svg';
import Pinterest from '../public/image/pinterest.svg';
import Dribble from '../public/image/dribble.svg';
import Behance from '../public/image/behance.svg';

export default function UserSocials() {
  return (
    <div className="flex flex-row justify-center items-center gap-6">
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-row gap-[10px]">
          <Link href={`https://www.twitter.com/`}>
            <div className="relative cursor-pointer">
              <Image src={Twitter} width={30} height={30} layout="fixed" alt="twitter" />
            </div>
          </Link>
          <Link href={`https://www.instagram.com/`}>
            <div className="relative cursor-pointer">
              <Image src={Instagram} width={30} height={30} layout="fixed" alt="twitter" />
            </div>
          </Link>
          <Link href={`https://www.discord.com/`}>
            <div className="relative cursor-pointer">
              <Image src={Discord} width={30} height={30} layout="fixed" alt="twitter" />
            </div>
          </Link>
        </div>
        <div className="flex flex-row gap-[10px]">
          <Link href={`https://www.pinterest.com/`}>
            <div className="relative cursor-pointer">
              <Image src={Pinterest} width={30} height={30} layout="fixed" alt="twitter" />
            </div>
          </Link>
          <Link href={`https://www.dribble.com/`}>
            <div className="relative cursor-pointer">
              <Image src={Dribble} width={30} height={30} layout="fixed" alt="twitter" />
            </div>
          </Link>
          <Link href={`https://www.behance.com/`}>
            <div className="relative cursor-pointer">
              <Image src={Behance} width={30} height={30} layout="fixed" alt="twitter" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
