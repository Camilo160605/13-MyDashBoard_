import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full text-center', cssClass ]">
    <ng-content />
  </section>
  `
})
export class HeavyLoadersFastComponent {

  @Input({required: true}) cssClass! : string; 

  constructor(){
    console.log('Heavy loader fast created');
    
  }

}
