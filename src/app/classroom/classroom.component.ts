import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth/auth.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
