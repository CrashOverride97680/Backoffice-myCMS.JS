export interface AsidePrefixInterceptor {
  view: boolean;
}

export interface SettingsPrefixInterceptor {
  _id: string;
  type: string;
  title: string;
  visible: boolean;
  updated: string;
}
