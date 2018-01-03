import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ResetComponent } from './reset/reset.component';

@NgModule ({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    AuthComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]

})
export class AuthModule {}
