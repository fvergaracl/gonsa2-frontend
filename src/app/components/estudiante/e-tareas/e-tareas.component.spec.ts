import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETareasComponent } from './e-tareas.component';

describe('ETareasComponent', () => {
  let component: ETareasComponent;
  let fixture: ComponentFixture<ETareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
