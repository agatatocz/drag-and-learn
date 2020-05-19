import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsBoardComponent } from './verbs-board.component';

describe('VerbsBoardComponent', () => {
  let component: VerbsBoardComponent;
  let fixture: ComponentFixture<VerbsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
