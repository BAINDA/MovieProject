export interface TrendsData {
  page: number;
  results: TrendsResult[];
  total_pages: number;
  total_results: number;
}

export interface TrendsResult {
  backdrop_path: string;
  id: number;
  title?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];
}
