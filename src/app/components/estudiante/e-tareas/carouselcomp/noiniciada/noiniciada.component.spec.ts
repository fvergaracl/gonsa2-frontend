import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiniciadaComponent } from './noiniciada.component';

describe('NoiniciadaComponent', () => {
  let component: NoiniciadaComponent;
  let fixture: ComponentFixture<NoiniciadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiniciadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiniciadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
