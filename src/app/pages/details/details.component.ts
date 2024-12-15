import { Component } from '@angular/core';
import { DetailBannerComponent } from '../../components/detail-banner/detail-banner.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailBannerComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {}
