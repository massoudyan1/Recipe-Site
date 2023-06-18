import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

  logOut() {
    this.authService.SignOut();
    this.router.navigate(['recipes/all']);
  }

  logIn(){
    this.router.navigate(['login']);
  }
}
