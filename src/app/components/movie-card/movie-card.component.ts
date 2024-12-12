import { Component, Input } from '@angular/core';
import { MovieCardConfig } from '../../interfaces/movie-card-config.interface';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() config!: MovieCardConfig;
}
