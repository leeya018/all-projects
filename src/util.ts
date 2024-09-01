import { Timestamp } from "firebase/firestore";

export type Project = {
  name: string;
  description: string;
  folderUrl: string;
  link: string;
  imagesAmount: number;
};

export const clientProjects: Project[] = [
  {
    name: "E-golden",
    description:
      "A big company working in Portugal that is helping people to make realocaiton to Portugal help with tax issuse and build bussinesses and realestate, show the info and serivece",
    folderUrl: "/images/e-golden",
    imagesAmount: 4,
    link: "https://e-golden.netlify.app/",
  },
  {
    name: "shosh-gallery",
    description:
      "my mom's gallery with all the work that she has done with Acrilic , painting the nature in Israel",
    folderUrl: "/images/shosh-gallery",
    imagesAmount: 4,
    link: "https://shosh-gallery.netlify.app/",
  },
  {
    name: "orly-waissman",
    description:
      "A site for my cousine which is a singer and also treat peolple with yoga ",
    folderUrl: "/images/orly-waissman",
    imagesAmount: 4,
    link: "https://orly-waissman.netlify.app/",
  },
];

export const myProjects: Project[] = [
  {
    name: "Affirmations",
    description:
      "get all your affirmtions in one place so you can practice them in anytiem and use all your sense for that .",
    folderUrl: "/images/affirmations",
    imagesAmount: 4,
    link: "https://affirmations-lee.netlify.app/",
  },
  {
    name: "Work",
    description:
      "get all the things that you need in work done for you in an easy way, best thingst si the shifts that you can add and track your wage",
    folderUrl: "/images/work",
    imagesAmount: 4,
    link: "https://work-lee.netlify.app/",
  },
  {
    name: "Todo",
    description:
      "help you to do all the tasks that you want to put, and you have to comeplete them each day for a week , ",
    imagesAmount: 2,
    folderUrl: "/images/todo",
    link: "https://lee-todo.netlify.app/",
  },
  {
    name: "Vision",
    description:
      "get the things that you want in live , by making a vision board with images and texts . saved on the localStorage",
    imagesAmount: 2,
    folderUrl: "/images/vision",
    link: "https://lee-todo.netlify.app/vision",
  },
  {
    name: "TIR",
    description:
      "get all the audio content of TIR program to be in one place and do the homework easily connecting links togeter with you sumups",
    imagesAmount: 5,
    folderUrl: "/images/tir",
    link: "https://thinking-into-results.netlify.app/",
  },
  {
    name: "audible",
    description:
      "get all the conetent of tir in an app just like audible which you can save the parts of audio that you like  , you ccan navigate between audio , put timer , speed up the audio , and ",
    imagesAmount: 5,
    folderUrl: "/images/audible",
    link: "https://thinking-into-results.netlify.app/audible",
  },
  {
    name: "code-finder",
    description: "help you to save parts of codes to use them later on",
    imagesAmount: 5,
    folderUrl: "/images/code-finder",
    link: "https://code-finder.netlify.app/",
  },
  {
    name: "Tech portfolio",
    description:
      "my tech portfolio that show all the resume of life wiht my projcets and success stories",
    imagesAmount: 6,
    folderUrl: "/images/tech-portfolio",
    link: "https://lee-yahav.netlify.app/en",
  },
  {
    name: "Dating portfolio",
    description:
      "my dating portfolio with the data , images and products that I have about dating",
    imagesAmount: 6,
    folderUrl: "/images/dating-portfolio",
    link: "https://portfolio-lee1.netlify.app/en",
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

export const project_types = {
  my: "my",
  clients: "clients",
};
