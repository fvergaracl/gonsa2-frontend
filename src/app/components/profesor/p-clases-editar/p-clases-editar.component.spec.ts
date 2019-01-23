import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PClasesEditarComponent } from './p-clases-editar.component';

describe('PClasesEditarComponent', () => {
  let component: PClasesEditarComponent;
  let fixture: ComponentFixture<PClasesEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PClasesEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PClasesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
