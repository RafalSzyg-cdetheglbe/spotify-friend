import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-spotify-callback',
  templateUrl: './spotify-callback.component.html',
  styleUrls: ['./spotify-callback.component.css']
})
export class SpotifyCallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {
    console.log('SpotifyCallbackComponent constructor called');

  }

  ngOnInit(): void {
   console.log('SpotifyCallbackComponent initialized');

  const queryParams = this.route.snapshot.queryParams;
  const code = queryParams['code'];
  const state = queryParams['state'];

  console.log('Query Params:', queryParams);
 console.log('Received Code:', code);
  console.log('Received State:', state);

  if (code && state) {
    console.log('Exchange code for token called');
    this.spotifyService.exchangeCodeForToken(code, state);
  } else {
    console.error('Invalid code or state parameters');
  }
  }

}
