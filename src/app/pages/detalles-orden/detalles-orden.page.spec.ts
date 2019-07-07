import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesOrdenPage } from './detalles-orden.page';

describe('DetallesOrdenPage', () => {
  let component: DetallesOrdenPage;
  let fixture: ComponentFixture<DetallesOrdenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesOrdenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesOrdenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
