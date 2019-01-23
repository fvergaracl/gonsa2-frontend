import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalalertaComponent } from './modalalerta.component';

describe('ModalalertaComponent', () => {
  let component: ModalalertaComponent;
  let fixture: ComponentFixture<ModalalertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalalertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalalertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
