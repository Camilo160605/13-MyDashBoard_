import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
type Grade = 'A'|'B'|'F'

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal( true );
  public calification = signal<Grade>( 'A' );
  public frameworks = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2 = signal([]);

  public toggleContent (): void {
    this.showContent.update(value => !value);
  }

  public toggleCalifitacion(){
    this.calification.update( note => note = 'B')
  }

  public changeCalificationToF():void{
    this.calification.update( note => note = 'F')
  }
}
