import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTemtemItemComponent } from './team-temtem-item.component';

describe('TeamTemtemItemComponent', () => {
  let component: TeamTemtemItemComponent;
  let fixture: ComponentFixture<TeamTemtemItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTemtemItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTemtemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
