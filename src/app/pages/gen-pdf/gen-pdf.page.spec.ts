import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenPdfPage } from './gen-pdf.page';

describe('GenPdfPage', () => {
  let component: GenPdfPage;
  let fixture: ComponentFixture<GenPdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenPdfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
