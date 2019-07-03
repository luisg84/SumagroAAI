import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusPage } from './estatus.page';

describe('EstatusPage', () => {
  let component: EstatusPage;
  let fixture: ComponentFixture<EstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
