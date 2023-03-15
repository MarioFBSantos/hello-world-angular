import { Component } from '@angular/core';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.scss'],
})
export class RaffleComponent {
  name = '';
  ticket = '';
  people: { name: string; ticket: string }[] = [];
  chosenOne!: chosen;

  addList() {
    this.people.push(
      { name: 'Mario', ticket: '#123456' },
      { name: 'Marcelo', ticket: '#112233' },
      { name: 'Carlos', ticket: '#223344' }
    );
  }

  addPerson() {
    this.people.push({ name: this.name, ticket: this.ticket });
    this.name = '';
    this.ticket = '';
  }

  pickOne() {
    const randomPerson = Math.floor(Math.random() * this.people.length);
    this.chosenOne = this.people[randomPerson];

    const confete = document.querySelector('.confete');
    confete?.classList.add('animacao');
    setTimeout(() => {
      confete?.classList.remove('animacao');
    }, 15000);
  }

  ngOnInit() {
    console.log('init');
    console.log(this.people);
    this.addList();
    console.log(this.people);
  }
}
interface chosen {
  name: string;
  ticket: string;
}
