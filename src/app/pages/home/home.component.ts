import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { OnInit } from '@angular/core';
import { GenericHttpService } from '../../services/generic-http.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title: string = 'All';

  constructor(private genericHttpService: GenericHttpService) {}

  ngOnInit(): void {}
}
