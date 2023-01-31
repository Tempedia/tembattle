import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemTechniquePriorityPainterComponent } from './temtem-technique-priority-painter.component';

describe('TemtemTechniquePriorityPainterComponent', () => {
  let component: TemtemTechniquePriorityPainterComponent;
  let fixture: ComponentFixture<TemtemTechniquePriorityPainterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemTechniquePriorityPainterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemTechniquePriorityPainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
