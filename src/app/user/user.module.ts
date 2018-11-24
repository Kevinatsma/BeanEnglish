import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './../core/auth/signup/signup.component';
import { AuthService } from '../core/auth/auth.service';

@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:  [
    UserListComponent,
    UserListItemComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
