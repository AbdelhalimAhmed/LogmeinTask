
export type Category = {
  id: number;
  title: string;
  url: string
};

export type FeedsStateType = {
  categoryFeeds: Category[];
}

export type FeedsContextType = {
  fetchCategoryFeeds: () => void;
} & FeedsStateType;
