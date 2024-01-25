import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyCallbackComponent } from './spotify-callback/spotify-callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  { path: 'callback', component: SpotifyCallbackComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component:LoginComponentComponent },
  { path:'', redirectTo:'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
