export class EndPoints {
  static MOVIES: string = 'discover/movie';
  static TV_SHOWS: string = 'discover/tv';
  static MOVIE_ID(movie_id: string): string {
    return `movie/${movie_id}`;
  }
  static TV_SHOW_ID(series_id: string): string {
    return `tv/${series_id}`;
  }
  static TRENDS: string = 'trending/all/day/?language=en-US';
}
