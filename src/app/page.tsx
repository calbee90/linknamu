import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-20 pt-5 sm:px-8">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-8 sm:mt-12">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
      </div>

      <nav aria-label="링크 목록" className="mt-10 flex flex-col gap-4">
        {profile.links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </nav>
    </main>
  );
}
