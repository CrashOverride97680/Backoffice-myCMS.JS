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
  icbm?: string;
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
