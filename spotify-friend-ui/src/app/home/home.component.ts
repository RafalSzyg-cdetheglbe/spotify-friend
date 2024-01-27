import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userProfile: any;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
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
