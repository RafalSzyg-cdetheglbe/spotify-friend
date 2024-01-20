import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userProfile: any;

  constructor(private spotifyService: SpotifyService) {}

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
