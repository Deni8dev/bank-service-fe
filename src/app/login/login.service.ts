import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../dto/user.dto';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';


export interface SessionStorage {
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static readonly sessionStorageKey = 'sessionStorage';
  private sessionStorage: SessionStorage | null;

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {
    const str = this.cookieService.get(LoginService.sessionStorageKey);
    this.sessionStorage = str ? {user: new User().deserialize(str)} : null;
  }

  login(name: string, pass: string): Observable<boolean> {
    return this.httpClient
      .post<User>(
        'http://localhost:8080/v1/login',
        {username: name, password: pass}
      ).pipe(map(user => {
        if (user) {
          this.saveSessionData(user);
          return true;
        }
        return false;
      }));
  }

  saveSessionData(u: User): void {
    this.sessionStorage = {user: u};
    console.log(this.sessionStorage);
    this.cookieService.set(LoginService.sessionStorageKey, JSON.stringify(u));
  }

  /**
   * Gets the user sessionStorage.
   * @return User or null if the user is not authenticated.
   */
  sessionUserStorage(): User {
    return this.sessionStorage ? this.sessionStorage.user : null;
  }

  /**
   * Checks is the user is authenticated.
   * @return boolean True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.sessionUserStorage();
  }

}
