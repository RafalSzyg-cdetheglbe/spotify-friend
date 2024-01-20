import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private clientId = '393dc0e9301545d798ae1764ef78a617';
  private redirectUri = 'http://localhost:4200/callback';
  private authorizationEndpoint = 'https://accounts.spotify.com/authorize';
  private responseType = 'code';
  private scope = 'user-read-private user-read-email';
  private state = this.generateRandomString(16);

  constructor(private http: HttpClient) { }

  login() {
    const authorizeUrl = `${this.authorizationEndpoint}?` +
      `response_type=${this.responseType}` +
      `&client_id=${this.clientId}` +
      `&scope=${this.scope}` +
      `&redirect_uri=${this.redirectUri}` +
      `&state=${this.state}`;

    window.location.href = authorizeUrl;
  }

  private generateRandomString(length: number): string {
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      randomString += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    return randomString;
  }
}