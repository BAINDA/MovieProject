export interface DetailConfig {
  img: string;
  description: string;
  subtitle?: string;
  rate: number;
  isVertical?: boolean;
  detailCards: DetailCard[];
}

export interface DetailCard {
  title: string;
  description: string;
}
