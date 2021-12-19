
export type Category = {
  id: number;
  title: string;
  url: string;
};

export type UrlType = {
  url: string;
};

export type NewsType = {
  id: string;
  title: string;
  description: string;
  published: string;
  links: UrlType[];
};

export type FeedType = {
  items: NewsType[];
  title: string;
};

export type FeedsStateType = {
  categoryFeeds: Category[];
  newsFeedLoading: boolean;
  newsFeedError: string;
  newsFeedData: FeedType;
};

export type FeedsContextType = {
  fetchCategoryFeeds: () => void;
  fetchNewsFeed: (url: string) => Promise<void>;
} & FeedsStateType;
