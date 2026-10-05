export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 폴더 기준 경로(예: "/profile.jpg") 또는 next.config.mjs에 허용된 외부 URL. 비워두면 이름 첫 글자로 대체
  image?: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "오현우",
  bio: "어둠의 세무사 ; 요즘에는 AI 개발에 관심이 많아요",
  image: "/오현우-증명사진 (1).jpg",
  links: [
    { id: "instagram", title: "Instagram", url: "https://instagram.com/" },
    { id: "blog", title: "블로그", url: "https://blog.naver.com/" },
    { id: "youtube", title: "YouTube", url: "https://youtube.com/" },
  ],
};
