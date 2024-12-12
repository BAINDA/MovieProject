import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SegmentedControlComponent } from '../../components/segmented-control/segmented-control.component';
import { SegmentedControlConfig } from '../../interfaces/ui-config/segmented-control-config.interface';
import { InputComponent } from '../../components/input/input.component';
import { RateChipComponent } from '../../components/rate-chip/rate-chip.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieCardConfig } from '../../interfaces/movie-card-config.interface';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NavBarComponent,
    SegmentedControlComponent,
    InputComponent,
    RateChipComponent,
    MovieCardComponent,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
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

  movieCards: MovieCardConfig[] = [
    {
      img: 'https://image.tmdb.org/t/p/w500/5akKFgS7eeXUw9rKTEujryKrH17.jpg',
      rate: 7.28,
      movieName: 'Bainda',
    },
    {
      img: 'https://image.tmdb.org/t/p/w500/5akKFgS7eeXUw9rKTEujryKrH17.jpg',
      rate: 5.28,
      movieName: 'Baaa',
    },
  ];
}
