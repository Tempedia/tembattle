import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemTechniqueListComponent } from './temtem-technique-list.component';

describe('TemtemTechniqueListComponent', () => {
  let component: TemtemTechniqueListComponent;
  let fixture: ComponentFixture<TemtemTechniqueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemTechniqueListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemTechniqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
