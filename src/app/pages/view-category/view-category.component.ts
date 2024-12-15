import { Component, OnInit } from '@angular/core';
import { MovieCardConfig } from '../../interfaces/movie-card-config.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericHttpService } from '../../services/generic-http.service';
import { EndPoints } from '../../endpoints/Endpoints';
import { MovieData, MovieResult } from '../../interfaces/movies.interface';
import { tvData, TvResult } from '../../interfaces/tv.interface';
import { InputComponent } from '../../components/input/input.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-view-category',
  standalone: true,
  imports: [InputComponent, MovieCardComponent],
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.scss',
})
export class ViewCategoryComponent implements OnInit {
  title: string = '';
  movieCards: MovieCardConfig[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private genericHttpService: GenericHttpService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      console.log('URL: ', url);
      this.title = url[0].path.includes('movies') ? 'Movies' : 'TV Shows';

      if (this.title === 'Movies') {
        this.getAllMovies();
      } else if (this.title === 'TV Shows') {
        this.getTvShows();
      } else {
        this.router.navigate(['']);
      }
    });
  }

  getAllMovies() {
    this.genericHttpService.httpGet(EndPoints.MOVIES).subscribe({
      next: (res: MovieData) => {
        this.movieCards = res.results.map((item: MovieResult) => {
          return {
            img: EndPoints.IMAGE_BASE + `/w500${item.poster_path}`,
            movieName: item.original_title,
            rate: item.vote_average,
            onClick: () => {
              this.router.navigate([`movies/${item.id}`]);
            },
          };
        });
      },
      error: (err: any) => {
        console.error('Error fetching movies: ', err);
      },
    });
  }

  getTvShows() {
    this.genericHttpService.httpGet(EndPoints.TV_SHOWS).subscribe({
      next: (res: tvData) => {
        this.movieCards = res.results.map((item: TvResult) => {
          return {
            img: EndPoints.IMAGE_BASE + `/w500${item.poster_path}`,
            movieName: item.original_name,
            rate: item.vote_average,
            onClick: () => {
              this.router.navigate([`tvshows/${item.id}`]);
            },
          };
        });
      },
      error: (err: any) => {
        console.error('Error fetching Tv Shows: ', err);
      },
    });
  }
}
