import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemPortraitComponent } from './temtem-portrait.component';

describe('TemtemPortraitComponent', () => {
  let component: TemtemPortraitComponent;
  let fixture: ComponentFixture<TemtemPortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemPortraitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
