import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDesafioDetalleComponent } from './p-desafio-detalle.component';

describe('PDesafioDetalleComponent', () => {
  let component: PDesafioDetalleComponent;
  let fixture: ComponentFixture<PDesafioDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDesafioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDesafioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
