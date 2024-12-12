import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-chip',
  standalone: true,
  imports: [],
  templateUrl: './rate-chip.component.html',
  styleUrl: './rate-chip.component.scss',
})
export class RateChipComponent implements OnInit {
  @Input() rate: number = 0;
  @Input() placeDecimals: number = 0;
  actualNumber: string = '';

  ngOnInit(): void {
    this.actualNumber = this.rate.toFixed(this.placeDecimals);
  }
}
