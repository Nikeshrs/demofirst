import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TourBooking } from './features/Tour/tour-booking/tour-booking';
import { Taskbar } from './taskbar/taskbar';

@Component({
  imports: [RouterOutlet,Taskbar,RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TourBooking');
}
