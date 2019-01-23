import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PClasesDetallesComponent } from './p-clases-detalles.component';

describe('PClasesDetallesComponent', () => {
  let component: PClasesDetallesComponent;
  let fixture: ComponentFixture<PClasesDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PClasesDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PClasesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
