import { Component, OnInit } from '@angular/core';
import { DetailBannerComponent } from '../../components/detail-banner/detail-banner.component';
import { ActivatedRoute } from '@angular/router';
import { GenericHttpService } from '../../services/generic-http.service';
import { EndPoints } from '../../endpoints/Endpoints';
import { DetailBannerConfig } from '../../interfaces/ui-config/detail-banner.config.interface';
import { RateChipComponent } from '../../components/rate-chip/rate-chip.component';
import { DetailConfig } from '../../interfaces/ui-config/detail-config.interface';
import { Genre } from '../../interfaces/tv-detail.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailBannerComponent, RateChipComponent, NgClass],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  bannerConfig!: DetailBannerConfig;

  config!: DetailConfig;

  constructor(
    private activatedRoute: ActivatedRoute,
    private genericHttpService: GenericHttpService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: any) => {
      console.log('Params: ', paramMap);

      if (paramMap.params.movie_id) {
        this.getMovieById(paramMap.params.movie_id);
      } else if (paramMap.params.series_id) {
        this.getTvShowById(paramMap.params.series_id);
      }
    });
  }

  getMovieById(id: string) {
    this.genericHttpService.httpGet(EndPoints.MOVIE_ID(id)).subscribe({
      next: (res: any) => {
        console.log('Movie Details: ', res);
        this.bannerConfig = {
          img: EndPoints.IMAGE_BASE + `/w1280${res.backdrop_path}`,
          pageName: 'Movies',
          path: 'movies',
          title: res.original_title,
        };

        let result = '';

        res.genres.map((item: Genre, index: number) => {
          result +=
            item.name + ' ' + (index === res.genres.length - 1 ? '' : ', ');
        });

        this.config = {
          img: EndPoints.IMAGE_BASE + `/w500${res.poster_path}`,
          description: res.overview,
          subtitle: res.tagline,
          rate: res.vote_average,
          isVertical: true,
          detailCards: [
            {
              title: 'Type',
              description: 'Movie',
            },

            {
              title: 'Release Date',
              description: res.release_date,
            },
            {
              title: 'Run Time',
              description: res.runtime.toString(),
            },
            {
              title: 'Genres',
              description: result,
            },
          ],
        };
      },
      error: (error: any) => {
        console.error('Error fetching movie details: ', error);
      },
    });
  }

  getTvShowById(id: string) {
    this.genericHttpService.httpGet(EndPoints.TV_SHOW_ID(id)).subscribe({
      next: (res: any) => {
        console.log('TV Show Details: ', res);
        this.bannerConfig = {
          img: EndPoints.IMAGE_BASE + `/w1280/${res.backdrop_path}`,
          pageName: 'TV Shows',
          path: 'tvshows',
          title: res.name,
        };

        let result = '';

        res.genres.map((item: Genre, index: number) => {
          result +=
            item.name + ' ' + (index === res.genres.length - 1 ? '' : ', ');
        });

        this.config = {
          img: EndPoints.IMAGE_BASE + `/w500${res.poster_path}`,
          description: res.overview,
          subtitle: res.tagline,
          rate: res.vote_average,
          isVertical: false,
          detailCards: [
            {
              title: 'Type',
              description: 'Movie',
            },
            {
              title: 'Status',
              description: res.status,
            },
            {
              title: 'First Air Date',
              description: res.first_air_date,
            },
            {
              title: 'No of Seasons',
              description: res.number_of_seasons.toString(),
            },
            {
              title: 'No of Episodes',
              description: res.number_of_episodes.toString(),
            },
            {
              title: 'Genres',
              description: result,
            },
          ],
        };
      },
      error: (error: any) => {
        console.error('Error fetching TV show details: ', error);
      },
    });
  }
}
