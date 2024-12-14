import { CommunityCardType, IntroCardType, memberType, NewsCardType } from "./types";

const communityCards: CommunityCardType[] = [
  {
    title: "Members, Friends",
    img: "",
    text: "Members, Friends Connection (like followers), Private Message",
  },
  {
    title: "Forum",
    img: "",
    text: "Forum is ready by BBPress. Your users can make topics and talk.",
  },
  {
    title: "List Builder",
    img: "",
    text: "Members, Groups list can be modified by drag & drop live builder.",
  },
  {
    title: "Groups",
    img: "",
    text: "Your users can create groups to let other users join and talk.",
  },
  {
    title: "Custom Module",
    img: "",
    text: "You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.",
  },
  {
    title: "List Scroll Effects",
    img: "",
    text: "8 different scroll effects are ready. You can always change by your tastes.",
  },
];

const newsCards: NewsCardType[] = [
  {
    title: "It Does Not Matter Hows Slowly go as Long",
    img: "",
  },
  {
    title: "Netbook Network Added New Photo Filter",
    img: "",
  },
  {
    title: "We Optimised Netbooks Better Navigation",
    img: "",
  },
];
export const members: memberType[] = [
  { name: "Fahim Rahman", img: "", username: "@rahman" },
  { name: "Kazi Rahman", img: "", username: "@Rahma" },
  { name: "Masterero Ali", img: "", username: "@Master" },
  { name: "Alia Karon", img: "", username: "@Alia" },
];

export const introCards:IntroCardType[] = [
  {
    id:1,
    title: "4.8 Rating",
    titleImg: "src/assets/Star.svg",
    titleImgAlt:'start',
    infoText: "+836k Members",
    infoImg: "src/assets/people.png",
    infoImgAlt:'people',
    paragraph: "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
    buttonText: "Join Our Community"
  },
  {
    id:2,
    title: "Awwwards",
    titleImg: "src/assets/Trophy.svg",
    titleImgAlt:'Trophy',
    infoText: "Best of 2021 on Github",
    infoImg: "src/assets/Ellipse 14.png",
    infoImgAlt:'github icon',
    paragraph: "The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.",
    buttonText: "Go To Awards"
  }
]
