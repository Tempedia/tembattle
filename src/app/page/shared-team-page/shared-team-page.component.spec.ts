import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTeamPageComponent } from './shared-team-page.component';

describe('SharedTeamPageComponent', () => {
  let component: SharedTeamPageComponent;
  let fixture: ComponentFixture<SharedTeamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTeamPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
