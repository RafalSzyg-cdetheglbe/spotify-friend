import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spotify-friend-ui';
  imageUrl = '../assets/light_logo.png';
  userProfile: any

  items: MenuItem[] = [
    {label: 'Home', icon: 'pi pi-home', routerLink: ['']},
    {label: 'Dashboard', icon: 'pi pi-user', routerLink: ['/dashboard']},
    {label: 'Your saved tracks', icon: 'pi pi-cog',  routerLink: ['/saved']},
    {label: 'Randomizer', icon: 'pi pi-spin pi-refresh', routerLink: ['/random']}
];

constructor(private spotifyService: SpotifyService) {
  this.spotifyService.getMyProfile().subscribe(
    (data) => {
      this.userProfile = data
    },
    (error) => {
      console.error('Error fetching user profile:', error);
    }
  );
 }

}
