import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ViewCategoryComponent } from './pages/view-category/view-category.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
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
    component: ViewCategoryComponent,
  },
  {
    path: 'tvshows',

    component: ViewCategoryComponent,
  },
];
