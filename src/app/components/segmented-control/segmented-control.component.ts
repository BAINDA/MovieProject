import { Component, Input } from '@angular/core';
import { SegmentedControlConfig } from '../../interfaces/ui-config/segmented-control-config.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segmented-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segmented-control.component.html',
  styleUrl: './segmented-control.component.scss',
})
export class SegmentedControlComponent {
  @Input() config: SegmentedControlConfig[] = [];

  selectItem(segment: SegmentedControlConfig) {
    if (segment.onClick) {
      segment.onClick();
    }

    this.config.map((item: SegmentedControlConfig) => {
      item.active = segment.name === item.name;
    });
  }
}
