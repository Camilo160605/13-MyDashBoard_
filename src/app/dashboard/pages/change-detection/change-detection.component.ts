import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ CommonModule,TitleComponent ],
  template: `
    <shared-title [title]="currentFramework()" ></shared-title>
    <br>
    <pre> {{ frameworkAsSignal() | json}} </pre>
    <pre> {{ frameworkAsPrperty | json}} </pre>
  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection ${ this.frameworkAsSignal().name }` )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016',
  });

  public frameworkAsPrperty = {
    name: 'Angular',
    releaseDate: '2016',
  };

  constructor(){
    setTimeout(() => {

      // De la forma nativa =
      // this.frameworkAsPrperty.name = 'React'

      this.frameworkAsSignal.update(value=>{
        value.name= 'react'
        return { ...value }
      });

      console.log('Hecho');

    }, 3000);
  }

}
