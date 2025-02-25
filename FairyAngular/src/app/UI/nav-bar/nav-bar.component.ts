import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userIsLoged = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.authenticated$.subscribe(isAuthenticated => {
      this.userIsLoged = isAuthenticated;
    });
  }

  logout(): void {
    this.authService.clearToken();
    this.router.navigateByUrl('/landing');
  }
}
