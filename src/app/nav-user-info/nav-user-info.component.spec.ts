import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUserInfoComponent } from './nav-user-info.component';

describe('NavUserInfoComponent', () => {
  let component: NavUserInfoComponent;
  let fixture: ComponentFixture<NavUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
