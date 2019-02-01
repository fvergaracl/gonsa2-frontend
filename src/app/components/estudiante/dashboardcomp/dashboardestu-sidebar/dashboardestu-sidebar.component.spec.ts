import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardestuSidebarComponent } from './dashboardestu-sidebar.component';

describe('DashboardestuSidebarComponent', () => {
  let component: DashboardestuSidebarComponent;
  let fixture: ComponentFixture<DashboardestuSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardestuSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardestuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
