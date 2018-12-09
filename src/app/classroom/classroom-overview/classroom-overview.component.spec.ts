import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomOverviewComponent } from './classroom-overview.component';

describe('ClassroomOverviewComponent', () => {
  let component: ClassroomOverviewComponent;
  let fixture: ComponentFixture<ClassroomOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
