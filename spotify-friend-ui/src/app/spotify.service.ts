import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'https://api.spotify.com/v1';
  private clientId = '393dc0e9301545d798ae1764ef78a617';
  private clientSecret = 'ecbe8b927bf04204bdef641e3aead2ff';
  private redirectUri = 'http://localhost:4200/callback';
  private authorizationEndpoint = 'https://accounts.spotify.com/authorize';
  private responseType = 'code';
  private scope = 'user-read-private user-read-email user-library-read user-library-modify';
  private state = this.generateRandomString(16);

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const authorizeUrl = `${this.authorizationEndpoint}?` +
      `response_type=${this.responseType}` +
      `&client_id=${this.clientId}` +
      `&scope=${this.scope}` +
      `&redirect_uri=${this.redirectUri}` +
      `&state=${this.state}`;
    console.log('Login method called');
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

  exchangeCodeForToken(code: string, state: string): void {
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`)
    });

    const body = new HttpParams()
      .set('code', code)
      .set('redirect_uri', this.redirectUri)
      .set('grant_type', 'authorization_code')
      .set('scope', 'user-library-read user-library-modify');

      console.log('Token Exchange Request Body:', body.toString());


    this.http.post(tokenUrl, body.toString(), { headers })
      .subscribe({
        next: (data: any) => {
          const accessToken = data.access_token;
          const refreshToken = data.refresh_token;

          localStorage.setItem('access_token', accessToken);
          localStorage.setItem('refresh_token', refreshToken);


        //  console.log('Access Token:', accessToken);
         // console.log('Refresh Token:', refreshToken);

          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Error exchanging code for token:', error);

          if (error instanceof HttpErrorResponse) {
            console.error('Status:', error.status);
            console.error('Response:', error.error);
          }

          this.router.navigate(['/dashboard']);
        }
      });
  }

  getMyProfile(): Observable<any> {
    const accessToken = localStorage.getItem('access_token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });
    return this.http.get('https://api.spotify.com/v1/me', { headers });
  }

  getSavedTracks() : Observable<any> {
    const accessToken = localStorage.getItem('access_token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.get('https://api.spotify.com/v1/me/tracks', { headers });
  }
  getRandomTrack(): Observable<any> {
    const accessToken = localStorage.getItem('access_token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    const playlistId = '4rnleEAOdmFAbRcNCgZMpY';
    const pageSize = 100;
    const numberOfPages = 1;

    let allTracks: any[] = [];

    const requests: Observable<any>[] = [];

    for (let page = 0; page < numberOfPages; page++) {
      const offset = page * pageSize;

      const endpoint = `${this.apiUrl}/playlists/${playlistId}/tracks?limit=${pageSize}&offset=${offset}`;

      requests.push(this.http.get<any>(endpoint, { headers }));
    }

    return forkJoin(requests).pipe(
      map((responses: any[]) => {
        allTracks = responses.reduce((acc, response) => acc.concat(response.items), []);

        if (allTracks.length > 0) {
          const randomIndex = Math.floor(Math.random() * allTracks.length);
          return allTracks[randomIndex].track;
        } else {
          console.warn('No tracks found in the specified playlist.');
          return null;
        }
      })
    );
  }

  saveTrack(trackId: string): Observable<any> {
    const accessToken = localStorage.getItem('access_token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    });

    const endpoint = `${this.apiUrl}/me/tracks`;

    const body = {
      ids: [trackId],
    };

    return this.http.put<any>(endpoint, body, { headers });
  }

  logout(){
    localStorage.clear();
  }

}
