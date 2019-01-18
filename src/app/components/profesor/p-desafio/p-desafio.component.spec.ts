import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDesafioComponent } from './p-desafio.component';

describe('PDesafioComponent', () => {
  let component: PDesafioComponent;
  let fixture: ComponentFixture<PDesafioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDesafioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
