import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUsersPageComponent } from './home-users-page.component';

describe('HomeUsersPageComponent', () => {
  let component: HomeUsersPageComponent;
  let fixture: ComponentFixture<HomeUsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeUsersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
