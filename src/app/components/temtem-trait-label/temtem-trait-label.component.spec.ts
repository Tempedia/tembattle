import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemTraitLabelComponent } from './temtem-trait-label.component';

describe('TemtemTraitLabelComponent', () => {
  let component: TemtemTraitLabelComponent;
  let fixture: ComponentFixture<TemtemTraitLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemTraitLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemTraitLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
