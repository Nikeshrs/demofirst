import { Routes } from '@angular/router';
import { TourBooking } from './features/Tour/tour-booking/tour-booking';
import { Tourlist } from './features/Tour/tourlist/tourlist';
import { Roomform } from './features/Tour/roomform/roomform';
import { Roomlist } from './features/Tour/roomlist/roomlist';

export const routes: Routes = [
    {path:'',component:TourBooking},
    {path:'tourbooking',component:TourBooking},
    {path:'tourlist',component:Tourlist},
    {path:'tourbooking/:id',component:TourBooking},
    {path:'roomform',component:Roomform},
    {path:'roomlist',component:Roomlist},
    {path:'roomform/:id',component:Roomform}


];
