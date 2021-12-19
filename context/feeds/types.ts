
export type Category = {
  id: number;
  title: string;
  url: string
};

export type UrlType = {
  url: string
};

export type NewsType = {
  id: string;
  title: string;
  description: string;
  published: string;
  links: UrlType[];
};

export type FeedsStateType = {
  categoryFeeds: Category[];
  newsFeedLoading: boolean,
  newsFeedError: string,
  newsFeedData: NewsType[]
}

export type FeedsContextType = {
  fetchCategoryFeeds: () => void;
  fetchNewsFeed: (url: string) => Promise<void>;
} & FeedsStateType;
