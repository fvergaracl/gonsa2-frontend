import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PClasesAgregaralumnoComponent } from './p-clases-agregaralumno.component';

describe('PClasesAgregaralumnoComponent', () => {
  let component: PClasesAgregaralumnoComponent;
  let fixture: ComponentFixture<PClasesAgregaralumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PClasesAgregaralumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PClasesAgregaralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
