import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemManutencaoPage } from './ordem-manutencao.page';

describe('OrdemManutencaoPage', () => {
  let component: OrdemManutencaoPage;
  let fixture: ComponentFixture<OrdemManutencaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemManutencaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemManutencaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
