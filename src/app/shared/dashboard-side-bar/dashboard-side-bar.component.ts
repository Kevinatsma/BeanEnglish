import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-side-bar',
  templateUrl: './dashboard-side-bar.component.html',
  styleUrls: ['./dashboard-side-bar.component.scss']
})
export class DashboardSideBarComponent implements OnInit {
  sidebarActive = true;

  constructor( public auth: AuthService,
               public router: Router) { }

  ngOnInit() {
  }

  closeMenu() {
    this.sidebarActive = false;
  }

  openMenu() {
    this.sidebarActive = true;
  }

  signOut() {
    this.auth.signOut();
    this.router.navigate(['login']);
  }

}
