import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'main', component: MainPageComponent},
  // refirect to main-app
  // privet
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
