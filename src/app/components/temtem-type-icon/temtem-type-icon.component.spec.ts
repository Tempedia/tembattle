import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemTypeIconComponent } from './temtem-type-icon.component';

describe('TemtemTypeIconComponent', () => {
  let component: TemtemTypeIconComponent;
  let fixture: ComponentFixture<TemtemTypeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemTypeIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemTypeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
