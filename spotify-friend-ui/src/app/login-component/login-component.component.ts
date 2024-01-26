import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  userProfile: any;
  constructor(private spotifyService: SpotifyService) { }

  login() {
    this.spotifyService.login();
  }

  ngOnInit(): void {
    this.spotifyService.getMyProfile().subscribe(
      (data) => {
        console.log('User Profile:', data);
        this.userProfile = data
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
}
