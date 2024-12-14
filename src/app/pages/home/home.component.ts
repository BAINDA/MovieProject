import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { GenericHttpService } from '../../services/generic-http.service';
import { EndPoints } from '../../endpoints/Endpoints';
import {
  TrendsData,
  TrendsResult,
} from '../../interfaces/models/trends.interface';
import { MovieCardConfig } from '../../interfaces/movie-card-config.interface';

import { SegmentedControlConfig } from '../../interfaces/ui-config/segmented-control-config.interface';
import { Router } from '@angular/router';
import { SegmentedControlComponent } from '../../components/segmented-control/segmented-control.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, MovieCardComponent, SegmentedControlComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'All';
  movieCards: MovieCardConfig[] = [];
  segments: SegmentedControlConfig[] = [
    {
      name: 'All',
      active: true,
    },
    {
      name: 'Movies',
      active: false,
    },
    {
      name: 'Tv Shows ',
      active: false,
    },
  ];

  constructor(
    private genericHttpService: GenericHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.genericHttpService.httpGet(EndPoints.TRENDS).subscribe({
      next: (response: TrendsData) => {
        console.log(response.results);
        this.movieCards = response.results
          .map(
            (item: TrendsResult) =>
              ({
                img: EndPoints.IMAGE_BASE + `/w500/${item.backdrop_path}`,
                movieName: item.original_title,
                rate: item.vote_average,
                onClick: () => {
                  console.log('Click :', item);
                  if (item.first_air_date) {
                    this.router.navigateByUrl(`tvshows/${item.id}`);
                  } else {
                    this.router.navigateByUrl(`movie/${item.id}`);
                  }
                },
              } as MovieCardConfig)
          )
          .filter((item) => item.movieName);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
