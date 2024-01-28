import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-random-track',
  templateUrl: './random-track.component.html',
  styleUrls: ['./random-track.component.css']
})
export class RandomTrackComponent implements OnInit {
  randomTrack: any;


  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  getRandomTrack(): void {
    this.spotifyService.getRandomTrack().subscribe((track) => {
      this.randomTrack = track;
      console.log('Random Track Response:', this.randomTrack);
    });
  }

  saveTrack(trackId: string): void{
    this.spotifyService.saveTrack(trackId).subscribe(response => {
      console.log('Track saved:', response);
    }, error => {
      console.error('Error saving track:', error);
    });
  }

  redirectToSpotify(spotifyUrl: string): void {
    window.open(spotifyUrl, '_blank');
  }
}
