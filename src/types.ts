export type CommunityCardType = {
  title: string;
  img: string;
  imgAlt:string;
  text: string;
  backgroundColor:string;
  dropShadowColor:string;
};

export type NewsCardType = Pick<CommunityCardType, "title" | "img">;

export type memberType = {
  name: string;
  img: string;
  username: string;
};

export type IntroCardType = {
  id:number,
  title: string;
  titleImg: string;
  titleImgAlt: string;
  infoText: string;
  infoImg:string;
  infoImgAlt:string;
  paragraph: string;
  buttonText: string;
};
