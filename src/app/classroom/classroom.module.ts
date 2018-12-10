import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

// Components
import { ClassroomComponent } from './classroom.component';

// Guards
import { AuthGuard } from '../core/auth/guards/auth.guard';
import { ClassroomOverviewComponent } from './classroom-overview/classroom-overview.component';

const classroomRoutes: Routes = [
// Classroom Module
{
  path: '',
  redirectTo: 'classroom',
  pathMatch: 'full'
},
{
  path: 'classroom',
  component: ClassroomComponent,
  data: { state: 'classroom' },
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      redirectTo: 'overview',
      pathMatch: 'full'
    },
    {
      path: 'overview',
      component: ClassroomOverviewComponent
    }
  ]
}
];

@NgModule({
  declarations: [ClassroomComponent, ClassroomOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(classroomRoutes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class ClassroomModule { }
