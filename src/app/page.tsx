import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-12 pt-4">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-6">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
      </div>

      <nav aria-label="링크 목록" className="mt-8 flex flex-col gap-3">
        {profile.links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </nav>
    </main>
  );
}
