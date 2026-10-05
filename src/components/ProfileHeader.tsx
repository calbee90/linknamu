import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full bg-white/60 shadow-[0_18px_40px_-14px_rgba(140,80,40,0.45)] ring-4 ring-white/80 dark:bg-white/10 dark:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.7)] dark:ring-white/10">
        {image ? (
          <Image src={image} alt={`${name} 프로필 사진`} fill sizes="112px" className="object-cover" priority />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-bold">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">{bio}</p>
    </header>
  );
}
