export interface LoginPrefixInterceptor {
  email: string;
  password: string;
}

export interface GetPostsByMaxNumberPrefixInterceptor {
  token: string;
  max: number;
}
