import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent implements OnInit {

  constructor( private auth: AuthService,
               public router: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.auth.signOut();
    this.router.navigate(['login']);
  }

}
