import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDesafioDetallesComponent } from './p-desafio-detalles.component';

describe('PDesafioDetallesComponent', () => {
  let component: PDesafioDetallesComponent;
  let fixture: ComponentFixture<PDesafioDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDesafioDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDesafioDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
