import { Component, inject, OnDestroy } from '@angular/core';
import { Subscription, tap } from 'rxjs';
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
export class AdminComponent implements OnDestroy{
  private adminService = inject(AdminService);

  private adminSub: Subscription | null = null

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

  ngOnDestroy(): void {
    if(this.adminSub) {
      this.adminSub.unsubscribe()
    }
  }
}
