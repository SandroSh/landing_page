export type CommunityCardType = {
    title:string;
    img:string;
    text:string;
}

export type NewsCardType = Pick<CommunityCardType, 'title' | 'img'>;

export type member = {
    name:string;
    img:string;
    username:string;
}