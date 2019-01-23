import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PClasesComponent } from './p-clases.component';

describe('PClasesComponent', () => {
  let component: PClasesComponent;
  let fixture: ComponentFixture<PClasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PClasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
