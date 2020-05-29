import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropTableComponent } from './drag-and-drop-table.component';

describe('DragAndDropTableComponent', () => {
  let component: DragAndDropTableComponent;
  let fixture: ComponentFixture<DragAndDropTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
