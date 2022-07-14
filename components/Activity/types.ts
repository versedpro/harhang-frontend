export const variants = {
  MINT: 'Mint',
  TRANSFER: 'Transfer',
  OFFER: 'Offer',
  LIST: 'List',
} as const;

export type Variant = typeof variants[keyof typeof variants];

export interface ActivityItemProps {
  variant: Variant;
  from?: string;
  to: string;
  price?: string;
  currency?: string;
  time: string;
}