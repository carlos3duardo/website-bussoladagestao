import Image from 'next/image';

interface PageTitleProps {
  title: string;
  imageUrl?: string;
}

export function PageTitle({ title, imageUrl }: PageTitleProps) {
  return (
    <header className="relative flex h-[320px] w-full items-center">
      <Image
        src={imageUrl || '/images/page-header-default.jpg'}
        alt=""
        width={1920}
        height={640}
        objectFit="cover"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
      <div className="relative container mx-auto text-white">
        <h1 className="text-center text-4xl font-semibold">{title}</h1>
      </div>
    </header>
  );
}
