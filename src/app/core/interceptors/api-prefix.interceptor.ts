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
