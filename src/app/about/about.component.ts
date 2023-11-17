import { Component,AfterContentChecked,AfterContentInit,ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,ProfileComponent,HomeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterContentInit,AfterContentChecked {

    @ContentChild('contentElement',{static:false})contentElement!:any;
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    if(this.contentElement){
      console.log('content element:',this.contentElement.nativeElement);
    }
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    if(this.contentElement){
      console.log('content element:',this.contentElement.nativeElement);
    }
  }

}
