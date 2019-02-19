import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoterminadaComponent } from './noterminada.component';

describe('NoterminadaComponent', () => {
  let component: NoterminadaComponent;
  let fixture: ComponentFixture<NoterminadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoterminadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoterminadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
