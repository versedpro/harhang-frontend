export const keys = {
  LOWTOHIGH: 'Low to high',
  DATE: 'Date',
  HIGHTOLOW: 'High to low',
  LIKES: 'likes'
} as const;

export type Key = typeof keys[keyof typeof keys];

export interface SortByProps {
  selected?: Key;
  onChange: (key: string) => void;
}