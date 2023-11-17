import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,HomeComponent,AboutComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
