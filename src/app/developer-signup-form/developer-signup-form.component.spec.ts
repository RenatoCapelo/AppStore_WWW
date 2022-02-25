import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSignupFormComponent } from './developer-signup-form.component';

describe('DeveloperSignupFormComponent', () => {
  let component: DeveloperSignupFormComponent;
  let fixture: ComponentFixture<DeveloperSignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperSignupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
