import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { HeaderAppBarComponent } from './components/header-app-bar/header-app-bar.component';
import { TimerComponent } from './components/timer/timer.component';

// services
import { HttpService } from './services/http.service';

// pages
import { MaterialLoginPageComponent } from './pages/material-login-page/material-login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderAppBarComponent,
    TimerComponent,
    MaterialLoginPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
