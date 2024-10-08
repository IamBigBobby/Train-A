import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ProfileFieldComponent } from '@app/train/components/profile-field/profile-field.component';
import { TuiCardLarge } from '@taiga-ui/layout';
import {
  TuiButton,
  TuiDialog,
  TuiLabel,
  TuiSurface,
  TuiTextfieldComponent,
  TuiTextfieldDirective,
  TuiTextfieldOptionsDirective,
  TuiTitle,
} from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { selectUserEmail, selectUserName, selectUserRole } from '@core/store/user-store/selectors/user.selectors';
import { UserActions } from '@core/store/user-store/actions/user.actions';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiAutoFocus } from '@taiga-ui/cdk';
import { map } from 'rxjs';
import { EUserRole } from '@app/train/models/user.model';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    ProfileFieldComponent,
    TuiCardLarge,
    TuiSurface,
    TuiTitle,
    TuiDialog,
    ReactiveFormsModule,
    TuiAutoFocus,
    TuiButton,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiTextfieldOptionsDirective,
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  protected readonly store = inject(Store);

  protected readonly router = inject(Router);

  private readonly formBuilder = inject(FormBuilder);

  protected readonly userName$ = this.store.select(selectUserName);

  protected readonly userEmail$ = this.store.select(selectUserEmail);

  protected readonly isManager$ = this.store
    .select(selectUserRole)
    .pipe(map((userRole) => userRole === EUserRole.manager));

  protected readonly changePasswordForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  protected isPasswordFormOpen = false;

  protected onLogout() {
    this.router.navigate(['/']);
    this.store.dispatch(UserActions.logout());
  }

  protected showChangePasswordForm() {
    this.isPasswordFormOpen = true;
  }

  protected onChangePasswordFormSubmit() {
    const password = this.changePasswordForm.get('password')?.value;
    if (!password) return;

    this.isPasswordFormOpen = false;

    this.store.dispatch(UserActions.updatePassword({ password }));
  }
}
