import { Component } from '@angular/core';
import { StationComponent } from './pages/stations/stations.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [StationComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
