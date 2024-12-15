import { Component, OnInit } from '@angular/core';
import { DetailBannerComponent } from '../../components/detail-banner/detail-banner.component';
import { ActivatedRoute } from '@angular/router';
import { GenericHttpService } from '../../services/generic-http.service';
import { EndPoints } from '../../endpoints/Endpoints';
import { DetailBannerConfig } from '../../interfaces/ui-config/detail-banner.config.interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailBannerComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  bannerConfig!: DetailBannerConfig;

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
          title: res.original_name,
        };
      },
      error: (error: any) => {
        console.error('Error fetching TV show details: ', error);
      },
    });
  }
}
