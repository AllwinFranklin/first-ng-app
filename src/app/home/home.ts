import { Component, signal } from '@angular/core';
import { Greeting } from '../component/greeting/greeting';
import { Counter } from '../component/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  homeMessage = signal('Hi there');

  keyUpHandler(event: KeyboardEvent) {
    console.log('User pressed: ' + event.key);
  }
}
