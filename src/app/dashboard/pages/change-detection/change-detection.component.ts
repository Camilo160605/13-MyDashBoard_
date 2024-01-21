import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [],
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {
  public showContent = signal( true );

  public toggleContent (): void {
    this.showContent.update(value => !value);
  }

}
