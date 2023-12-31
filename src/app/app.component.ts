import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';



@Component({
  selector: 'app-root',

  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent,ProfileComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  parentValue: string = 'Initial Value';

  constructor() {
    setTimeout(() => {
      this.parentValue = 'Updated Value';
    }, 5000);
  }
  
}

