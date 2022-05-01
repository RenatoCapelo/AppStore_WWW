import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDevPageComponent } from './not-dev-page.component';

describe('NotDevPageComponent', () => {
  let component: NotDevPageComponent;
  let fixture: ComponentFixture<NotDevPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotDevPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotDevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
