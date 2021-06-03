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
