import { Bookmark, Ellipsis, Heart, MessageCircle, Send } from 'lucide-react';
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
          <Link
            href={`https://www.instagram.com/${userAccount}`}
            target="_blank"
          >
            <Image
              src={avatarUrl}
              width={1200}
              height={1200}
              className="h-[28px] w-[28px] rounded-full"
              alt=""
            />
          </Link>
        </figure>
        <div className="flex flex-grow flex-col gap-0.5">
          <Link
            href={`https://www.instagram.com/${userAccount}`}
            target="_blank"
            className="text-sm leading-none font-bold"
          >
            {userAccount}
          </Link>
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
      <div className="flex items-center justify-between p-4">
        <ul className="flex gap-2">
          <li>
            <Link href={postUrl} target="_blank">
              <Heart
                size={24}
                className="text-slate-700 hover:fill-slate-700"
              />
            </Link>
          </li>
          <li>
            <Link href={postUrl} target="_blank">
              <MessageCircle
                size={22}
                className="text-slate-700 hover:fill-slate-700"
              />
            </Link>
          </li>
          <li>
            <Link href={postUrl} target="_blank">
              <Send size={22} className="text-slate-700 hover:fill-slate-700" />
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={postUrl} target="_blank">
              <Bookmark
                size={22}
                className="text-slate-700 hover:fill-slate-700"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
