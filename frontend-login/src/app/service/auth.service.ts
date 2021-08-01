import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { User } from '../model/user';
import { ConfigService } from './config.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${this.config.apiUrl}login`;
  logoutUrl = `${this.config.apiUrl}logout`;
  storageName = 'currentUser';
  currentUserSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  lastToken: string = '';

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) {
    if (localStorage.currentUser) {
      const user: User = JSON.parse(localStorage.currentUser);
      this.lastToken = user.token || '';
      this.currentUserSubject$.next(user)
    }
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject$.value;
  }

  logout() {
    this.lastToken = '';
    localStorage.removeItem(this.storageName);
    this.currentUserSubject$.next(null);
    this.router.navigate(['login']);
  }

  // küldünk egy egyszrű HHTP kéréset az autentikációt végző szervernek
  login(loginData: User): Observable<User | User[] | null> {
    return this.http.post<{ accessToken: string }>(
      this.loginUrl,
      { email: loginData.email, password: loginData.password }
    )
      // az eredményt tovább pipe-oljuk
      .pipe(switchMap(response => {
        // ha van accessToken, akkor továbbdobjuk a kérést,
        // és lekérjük az adatokat a userService-segítségével
        if (response.accessToken) {
          this.lastToken = response.accessToken;
          return this.userService.query(`email=${loginData.email}`);
        }
        return of(null);
      }))
      // tovább vizsgáljuk a választ, ha nincs user, akkor töröljük a bejelentkzést
      .pipe(
        tap(user => {
          if (!user) {
            localStorage.removeItem(this.storageName);
            this.currentUserSubject$.next(null);
            // ha van user, akkor annak adatait frissítem és a localStorage-ban tároljuk
          } else {
            (user as User[])[0].token = this.lastToken;
            localStorage.setItem(this.storageName, JSON.stringify((user as User[])[0]));
            this.currentUserSubject$.next((user as User[])[0]);
          }
        })
      );
  }

}
