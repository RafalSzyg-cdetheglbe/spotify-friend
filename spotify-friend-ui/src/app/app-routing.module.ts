import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyCallbackComponent } from './spotify-callback/spotify-callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './home/home.component';
import { SavedTracksComponent } from './saved-tracks/saved-tracks.component';
import { RandomTrackComponent } from './random-track/random-track.component';

const routes: Routes = [
  { path: 'callback', component: SpotifyCallbackComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent},
  { path: 'saved', component: SavedTracksComponent},
  { path: 'random', component: RandomTrackComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
