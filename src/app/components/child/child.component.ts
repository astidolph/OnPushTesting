import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Person } from 'src/assets/person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  @Input() people: Person[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  isEvenId(id: number) {
    console.log('hit child method');
    return id % 2 === 0;
  }

  manualRefresh() {
    this.cd.detectChanges();
  }

}
