import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'tvshows/:series_id',
    component: DetailsComponent,
  },
  {
    path: 'movies/:movie_id',
    component: DetailsComponent,
  },
  {
    path: 'movies',
    component: DetailsComponent,
  },
  {
    path: 'tvshows',

    component: DetailsComponent,
  },
];
