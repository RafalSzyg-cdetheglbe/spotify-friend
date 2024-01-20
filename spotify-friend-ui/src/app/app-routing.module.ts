import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyCallbackComponent } from './spotify-callback/spotify-callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'callback', component: SpotifyCallbackComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
