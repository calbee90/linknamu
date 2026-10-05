export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 폴더 기준 경로 (예: "/profile.jpg"). 비워두면 이름 첫 글자로 대체
  image?: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "오현우",
  bio: "세계 최강 세무라이",
  links: [
    { id: "instagram", title: "Instagram", url: "https://instagram.com/" },
    { id: "blog", title: "블로그", url: "https://blog.naver.com/" },
    { id: "youtube", title: "YouTube", url: "https://youtube.com/" },
  ],
};
