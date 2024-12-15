import { CommunityCardType, IntroCardType, memberType, NewsCardType } from "./types";

export const communityCardsData: CommunityCardType[] = [
  { 
    title: "Members, Friends",
    img: "src/assets/Icon.svg",
    imgAlt:'two person',
    text: "Members, Friends Connection (like followers), Private Message",
    backgroundColor:'#287FF5',
    dropShadowColor:'#6DABFF5C'
  },
  {
    title: "Groups",
    img: "src/assets/Group.svg",
    imgAlt:'People',
    text: "Your users can create groups to let other users join and talk.",
    backgroundColor:'#F1464D',
    dropShadowColor:'#F8575E4D'
  },
  {
    title: "Forum",
    img: "./src/assets/messageIcon.svg",
    imgAlt:'Messaging',
    text: "Forum is ready by BBPress. Your users can make topics and talk.",
    backgroundColor:'#FFB133',
    dropShadowColor:'#FABA544D'
  },
  {
    title: "Custom Module",
    img: "src/assets/Icon-2.svg",
    imgAlt:'module',
    text: "You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.",
    backgroundColor:'#287FF5',
    dropShadowColor:'#6DABFF5C'
  },
  {
    title: "List Builder",
    img: "src/assets/ListIcon.svg",
    imgAlt:'List',
    text: "Members, Groups list can be modified by drag & drop live builder.",
    backgroundColor:'#F1464D',
    dropShadowColor:'#F8575E4D'
  },
  {
    title: "List Scroll Effects",
    img: "src/assets/Icon-3.svg",
    imgAlt:'Scrolling List',
    text: "8 different scroll effects are ready. You can always change by your tastes.",
    backgroundColor:'#FFB133',
    dropShadowColor:'#FABA544D'
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
  { name: "Fahim Rahman", img: "src/assets/Image-3.png", username: "@rahman" },
  { name: "Kazi Rahman", img: "src/assets/Image-2.png", username: "@Rahma" },
  { name: "Masterero Ali", img: "src/assets/Image-1.png", username: "@Master" },
  { name: "Alia Karon", img: "src/assets/Image.png", username: "@Alia" },
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
