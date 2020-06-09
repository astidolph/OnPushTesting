import { Component } from '@angular/core';
import { Person } from 'src/assets/person';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  people: Person[] = [
    { id: 0, name: 'John' },
    { id: 1, name: 'Dave' },
    { id: 2, name: 'Steve' }
  ];

  constructor() { }

  addNumberIncorrectly() {
    this.people.push({ id: this.people.length, name: 'Fred' });
  }

  addNumberCorrectly() {
    const newPerson: Person = { id: this.people.length, name: 'Fred' };
    this.people = [...this.people, newPerson];
  }
}
