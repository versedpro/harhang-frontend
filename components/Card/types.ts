export const variants = {
  CARD: 'card',
  STAMP: 'stamp',
} as const;

export type Variant = typeof variants[keyof typeof variants];

export interface CardProps {
  variant: Variant;
  title: string;
  region: string;
  price: number;
  image: string;
  currency: string;
  like: boolean;
}