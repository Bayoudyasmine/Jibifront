import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  firstName: string = 'John';
  lastName: string = 'Doe';
  city: string = 'New York';
  country: string = 'United States';
  occupation: string = 'Web Producer - Web Specialist';
  education: string = 'Columbia University - New York';
  friends: number = 65;
  photos: number = 43;
  comments: number = 21;
}
