import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private authenticatedSubject = new BehaviorSubject<boolean>(false);
  authenticated$ = this.authenticatedSubject.asObservable();

  constructor(private cookieService: CookieService) {
    this.authenticatedSubject.next(this.isAuthenticated());
  }

  storeToken(token: string): void {
    this.cookieService.set(this.tokenKey, token);
    this.authenticatedSubject.next(true);
  }

  getToken(): string | null {
    return this.cookieService.get(this.tokenKey) || null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  clearToken(): void {
    this.cookieService.delete(this.tokenKey);
    this.authenticatedSubject.next(false);
  }

  hasPermission(permission: string): boolean {
    const permissions = this.cookieService.get('permissions');
    if (!permissions) {
      return false;
    }
    const permissionList = permissions.split(',');
    return permissionList.includes(permission);
  }
}