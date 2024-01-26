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
    {label: 'Home', icon: 'pi pi-fw pi-calendar', routerLink: ['']},
    {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard']},
    {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
];
}
