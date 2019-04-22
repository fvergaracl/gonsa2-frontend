import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PClasesCrearEstudianteComponent } from './p-clases-crear-estudiante.component';

describe('PClasesCrearEstudianteComponent', () => {
  let component: PClasesCrearEstudianteComponent;
  let fixture: ComponentFixture<PClasesCrearEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PClasesCrearEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PClasesCrearEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
