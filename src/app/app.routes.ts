import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        component:HomeComponent,
        path:''
    },
    {
        component:ProfileComponent,
        path:'About'
    },
];
