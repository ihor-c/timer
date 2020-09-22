import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MainPageComponent } from './pages/main-page/main-page.component';


const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  // refirect to main-app
  // privet
  {path: '**', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
