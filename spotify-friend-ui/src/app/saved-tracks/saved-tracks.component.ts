import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-saved-tracks',
  templateUrl: './saved-tracks.component.html',
  styleUrls: ['./saved-tracks.component.css']
})
export class SavedTracksComponent implements OnInit {
playAlbum(arg0: any) {
throw new Error('Method not implemented.');
}

  public savedTracks : any
  constructor(private spotifyService : SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getSavedTracks().subscribe(
      (data) => {
        console.log('Saved tracks:', data);
        this.savedTracks = data
      },
      (error) => {
        console.error('Error fetching saved tracks:', error);
      }
    );
  }
}
