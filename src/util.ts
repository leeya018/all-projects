import { Timestamp } from "firebase/firestore";

export type Project = {
  name: string;
  description: string;
  folderUrl: string;
  link: string;
};

export const projectDetails: Project[] = [
  {
    name: "Affirmations",
    description:
      "get all your affirmtions in one place so you can practice them in anytiem and use all your sense for that .",
    folderUrl: "/images/affirmations",
    link: "https://affirmations-lee.netlify.app/",
  },
];

export const getDbUrl = () => {
  if (process.env.NODE_ENV) {
    return "https://console.firebase.google.com/u/0/project/apartments-invest/firestore";
  }
  return "https://console.firebase.google.com/u/0/project/dating-empire/firestore";
};

export const netlifyUrl = "https://app.netlify.com/sites/work-lee/deploys";
export const githubUrl = "https://github.com/leeya018/work";

const today = new Date();
export const curr_m = today.getMonth() + 1;
export const curr_y = today.getFullYear();
