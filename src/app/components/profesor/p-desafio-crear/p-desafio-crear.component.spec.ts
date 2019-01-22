import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDesafioCrearComponent } from './p-desafio-crear.component';

describe('PDesafioCrearComponent', () => {
  let component: PDesafioCrearComponent;
  let fixture: ComponentFixture<PDesafioCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDesafioCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDesafioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
