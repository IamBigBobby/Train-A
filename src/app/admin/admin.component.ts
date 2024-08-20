import { Component, inject } from '@angular/core';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  private adminService = inject(AdminService);

  // constructor() {
  //   this.adminService.getStationList().subscribe({
  //     next: (response) => {
  //       console.log("fetch data", response);
  //     },
  //     error: (error) => console.error("error", error)
  //   })
  // }
}
