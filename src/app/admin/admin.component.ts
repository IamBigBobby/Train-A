import { Component, inject } from '@angular/core';
import { tap } from 'rxjs';
import { StationComponent } from './pages/stations/stations.component';
import { ICreateAdmin } from './models/create-admin';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [StationComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  private adminService = inject(AdminService);

  readonly newAdmin: ICreateAdmin = {
    email: 'admin@admin.com',
    password: 'my-password',
  };

  constructor() {
    this.adminService
      .loginAdmin(this.newAdmin)
      .pipe(
        tap((response) => {
          this.adminService.token$.next(response.token);
        })
      )
      .subscribe();
  }
}
