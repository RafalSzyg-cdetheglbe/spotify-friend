import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spotify-friend-ui';


  constructor(private spotifyService: SpotifyService) { }

  login() {
    this.spotifyService.login();
  }
 
}
