import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PClasesXLSXComponent } from './p-clases-xlsx.component';

describe('PClasesXLSXComponent', () => {
  let component: PClasesXLSXComponent;
  let fixture: ComponentFixture<PClasesXLSXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PClasesXLSXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PClasesXLSXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
