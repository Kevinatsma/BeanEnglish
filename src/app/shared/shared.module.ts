import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardSideBarComponent } from './dashboard-side-bar/dashboard-side-bar.component';
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component';
import { DesktopMenuMobileComponent } from './desktop-menu-mobile/desktop-menu-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardSideBarComponent,
    DesktopMenuComponent,
    DesktopMenuMobileComponent
  ],
  declarations: [
  DashboardSideBarComponent,
  DesktopMenuComponent,
  DesktopMenuMobileComponent
]
})
export class SharedModule { }
