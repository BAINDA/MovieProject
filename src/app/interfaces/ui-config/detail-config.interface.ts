export interface DetailConfig {
  img: string;
  subtitle?: string;
  rate: string;
  isVertical?: boolean;
  detailCards: DetailCard;
}

export interface DetailCard {
  title: string;
  description: string;
}
