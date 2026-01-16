import { Ellipsis } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ComponentProps {
  userAccount: string;
  userName: string;
  avatarUrl: string;
  postImageUrl: string;
  postUrl: string;
  className?: string;
}

export function InstagramPost({
  userAccount,
  userName,
  avatarUrl,
  postImageUrl,
  postUrl,
}: ComponentProps) {
  return (
    <div className="rounded-lg bg-white shadow">
      <header className="flex items-center justify-between gap-2 p-4">
        <figure>
          <Image
            src={avatarUrl}
            width={1200}
            height={1200}
            className="h-[28px] w-[28px] rounded-full"
            alt=""
          />
        </figure>
        <div className="flex flex-grow flex-col gap-0.5">
          <span className="text-sm leading-none font-bold">{userAccount}</span>
          <span className="text-xs leading-none font-normal text-slate-600">
            {userName}
          </span>
        </div>
        <div>
          <Ellipsis size={21} />
        </div>
      </header>
      <figure data-slot="media">
        <Link href={postUrl} target="_blank" className="hover:opacity-80">
          <Image
            src={postImageUrl}
            width={1080}
            height={1920}
            alt=""
            className="aspect-[3/4] w-full object-cover"
          />
        </Link>
      </figure>
      <div>footer</div>
    </div>
  );
}
