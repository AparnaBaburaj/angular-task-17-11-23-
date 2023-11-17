import { Component,  Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'simple',
  standalone: true,
  imports: [CommonModule,HomeComponent,ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() inputValue: string = '';

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
    if(changes['inputValue']){
    console.log('input property "data" changed');
    console.log('previous value:',changes['inputValue'].previousValue);
    console.log('current value:',changes['inputValue'].currentValue);
    }
  }
greeting:any=''
  ngOnInit(): void {
    console.log('ngOnInit');
    this.greeting="hello"
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  

  
}
