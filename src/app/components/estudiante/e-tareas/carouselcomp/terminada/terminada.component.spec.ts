import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminadaComponent } from './terminada.component';

describe('TerminadaComponent', () => {
  let component: TerminadaComponent;
  let fixture: ComponentFixture<TerminadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
