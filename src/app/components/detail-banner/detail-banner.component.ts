import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { DetailBannerConfig } from '../../interfaces/ui-config/detail-banner.config.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-banner',
  standalone: true,
  imports: [],
  templateUrl: './detail-banner.component.html',
  styleUrl: './detail-banner.component.scss',
})
export class DetailBannerComponent {
  @Input() config!: DetailBannerConfig;

  constructor(private router: Router) {}

  open(link: string) {
    this.router.navigateByUrl(link);
  }
}
