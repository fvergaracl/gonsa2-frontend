import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBusquedasComponent } from './e-busquedas.component';

describe('EBusquedasComponent', () => {
  let component: EBusquedasComponent;
  let fixture: ComponentFixture<EBusquedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBusquedasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBusquedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
