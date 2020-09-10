import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User(
    'bharath',
    'bharathjinka09@gmail.com',
    9110334114,
    'default',
    'morning',
    true
  );

  topicHasError = true;
  submitted = false;
  errorMsg = '';
  successMsg = '';

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  constructor(private _enrollmentService: EnrollmentService) {}

  onSubmit(userForm) {
    console.log(userForm);
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      (data) => (this.successMsg = data.statusText),
      (error) => (this.errorMsg = error.statusText)
    );
  }
}
