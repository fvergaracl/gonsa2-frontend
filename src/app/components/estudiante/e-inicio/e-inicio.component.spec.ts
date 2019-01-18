import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EInicioComponent } from './e-inicio.component';

describe('EInicioComponent', () => {
  let component: EInicioComponent;
  let fixture: ComponentFixture<EInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
