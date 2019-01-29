import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDesafioEditarComponent } from './p-desafio-editar.component';

describe('PDesafioEditarComponent', () => {
  let component: PDesafioEditarComponent;
  let fixture: ComponentFixture<PDesafioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDesafioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDesafioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
