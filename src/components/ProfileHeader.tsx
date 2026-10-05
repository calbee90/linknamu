import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-gray-900 bg-gray-100 dark:border-gray-100 dark:bg-gray-800">
        {image ? (
          <Image src={image} alt={`${name} 프로필 사진`} fill sizes="112px" className="object-cover" priority />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-bold">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-[0.3em]">{name}</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </header>
  );
}
