import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemTechniqueDamageComponent } from './temtem-technique-damage.component';

describe('TemtemTechniqueDamageComponent', () => {
  let component: TemtemTechniqueDamageComponent;
  let fixture: ComponentFixture<TemtemTechniqueDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemTechniqueDamageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemTechniqueDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
