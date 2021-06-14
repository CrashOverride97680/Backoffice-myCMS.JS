export interface LoginPrefixInterceptor {
  email: string;
  password: string;
}

export interface GetPostsByMaxNumberPrefixInterceptor {
  token: string;
  max: number;
}

export interface CreateCategoryPrefixInterceptor {
    name: string;
    description: string;
    titleSeo: string;
    important: string;
    visible: boolean;
}

export interface ModifyCategoryPrefixInterceptor {
  codCategory: string;
  name: string;
  description: string;
  titleSeo: string;
  important: number;
  visible: boolean;
}

export interface Seo {
  description: string;
}

export interface HttpPostPrefixInterceptor {
  _id?: string;
  lang: string;
  type: string;
  title: string;
  seo?: Seo;
  content: string;
  important: number;
  visible: boolean;
  category: string;
}

export interface HttpBaseImagePrefixInterceptor {
  images: string;
  names: string;
}

export interface HttpUserModifyDataInterceptor {
  email: string;
  username: string;
  name: string;
  surname: string;
}
