import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../dto/user.dto';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { of } from 'rxjs/internal/observable/of';


export interface SessionStorage {
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static readonly sessionStorageKey = 'sessionStorage';
  private sessionStorage: SessionStorage = { user: null };

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {
    const str = this.cookieService.get(LoginService.sessionStorageKey);
    this.sessionStorage = { user: str ? new User().deserialize(str) : null };
  }

  login(name: string, pass: string): Observable<boolean> {
    return this.httpClient
      .post<User>(
        `${environment.service_url}/login`,
        { username: name, password: pass }
      ).pipe(map(user => {
        if (user) {
          this.saveSessionData(user);
          return true;
        }
        return false;
      })).pipe(catchError(() => of(false)));
  }

  logout() {
    this.sessionStorage = null;
    this.cookieService.delete(LoginService.sessionStorageKey);
    return of(true);
  }

  saveSessionData(u: User): void {
    this.sessionStorage = { user: u };
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
