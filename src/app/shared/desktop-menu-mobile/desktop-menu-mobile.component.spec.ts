import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMenuMobileComponent } from './desktop-menu-mobile.component';

describe('DesktopMenuMobileComponent', () => {
  let component: DesktopMenuMobileComponent;
  let fixture: ComponentFixture<DesktopMenuMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopMenuMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopMenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
