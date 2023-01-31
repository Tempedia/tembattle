import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemTechniqueItemComponent } from './temtem-technique-item.component';

describe('TemtemTechniqueItemComponent', () => {
  let component: TemtemTechniqueItemComponent;
  let fixture: ComponentFixture<TemtemTechniqueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemTechniqueItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemTechniqueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
