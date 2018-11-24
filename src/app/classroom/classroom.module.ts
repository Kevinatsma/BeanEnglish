import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomComponent } from './classroom.component';
import { AuthGuard } from '../core/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'classroom',
    component: ClassroomComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [ClassroomComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [

  ]
})
export class ClassroomModule { }
