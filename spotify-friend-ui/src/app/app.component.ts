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
  
  items: MenuItem[] = [
    {label: 'Home', routerLink: ['']},
    {label: 'Dashboard', routerLink: ['/dashboard']},
    {label: 'Your saved tracks', routerLink: ['/saved']},
    {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
];
}
