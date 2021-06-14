
export interface HttpStatusReturnedInterceptor {
  number: string;
  message: string;
}

export interface HttpInterceptor {
  token: string;
}

export interface HttpLogoutInterceptor {
  number: number;
  message: string;
}

export interface HttpGetPostsNumbersInterceptor {
  count: number;
}

export interface HttpGetMailSubNumbersInterceptor {
  count: number;
}

export interface HttpGetNumChatInterceptor {
  count: number;
}

export interface HttpGetNumPayInterceptor {
  count: number;
}

export interface SeoSemInterfaces {
  description: string;
  ogTitle?: string;
  ogType?: string;
  ogUrl?: string;
  ogSiteName?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
  icom?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterUrl?: string;
  twitterTitle?: string;
}

export interface HttpPostInterceptor {
  _id: string;
  lang: string;
  type: string;
  title: string;
  seo: SeoSemInterfaces;
  content: string;
  important: number;
  visible: boolean;
  category: string[];
  updated?: string;
}

export interface HttpGetPostsVisibleNumberInterceptor {
  count: number;
}

export interface HttpGetPostsUnvisibleNumberInterceptor {
  count: number;
}

export interface HttpGetAllCategory {
  visible: boolean;
  _id: string;
  name: string;
  description: string;
  titleSEO: string;
  important: string;
  subCategory: [];
  updated: string;
}

export interface HttpGetAllNumberCategory {
  count: number;
}

export interface Seo {
  description: string;
}

export interface Category {
  codeCategory: string;
}

export interface HttpPost {
  _id?: string;
  lang: string;
  type: string;
  title: string;
  seo: Seo;
  content: string;
  important: number;
  visible: boolean;
  category: Category[];
  create?: string;
}

export interface HttpGetNumberImage {
  count: number;
}

export interface HttpListImage {
  _id: string;
  created: string;
  imgName: string;
  originalFileName: string;
  destination: string;
  imgPath: string;
  imageType: string;
  size: number;
}

export interface HttpListImageBase {
  baseString: string;
  created: string;
  imgName: string;
  imgPath: string;
  originalFileName: string;
}

export interface HttpUserInfo {
  admin: boolean;
  confirmed: boolean;
  create: string;
  email: string;
  modified: string;
  name: string;
  password: string;
  surname: string;
  updated: string;
  username: string;
  _id: string;
}
