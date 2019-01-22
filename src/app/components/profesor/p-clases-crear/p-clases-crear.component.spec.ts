import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PClasesCrearComponent } from './p-clases-crear.component';

describe('PClasesCrearComponent', () => {
  let component: PClasesCrearComponent;
  let fixture: ComponentFixture<PClasesCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PClasesCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PClasesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
