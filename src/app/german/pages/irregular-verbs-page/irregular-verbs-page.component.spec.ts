import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrregularVerbsPageComponent } from './irregular-verbs-page.component';

describe('IrregularVerbsPageComponent', () => {
  let component: IrregularVerbsPageComponent;
  let fixture: ComponentFixture<IrregularVerbsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrregularVerbsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrregularVerbsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
