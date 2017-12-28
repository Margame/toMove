import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {AccountsService} from './shared/services/accounts.service';
import {AuthService} from './shared/services/auth.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule

  ],
  providers: [AccountsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
