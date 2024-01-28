import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit{
  userProfile: any;

  @Input() bigButton?: Boolean;

  constructor(private spotifyService: SpotifyService) {}

  login() {
    this.spotifyService.login();
  }
  logout() {
    this.spotifyService.logout();
    window.location.reload()
  }

  updateUserProfile(){
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
  ngOnInit(): void {
    this.updateUserProfile()
  }
}
