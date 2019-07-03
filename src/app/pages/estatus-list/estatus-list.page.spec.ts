import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusListPage } from './estatus-list.page';

describe('EstatusListPage', () => {
  let component: EstatusListPage;
  let fixture: ComponentFixture<EstatusListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
