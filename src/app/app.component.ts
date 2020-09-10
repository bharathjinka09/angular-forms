import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User(
    '',
    'bharathjinka09@gmail.com',
    9110334114,
    '',
    'morning',
    true
  );
}
