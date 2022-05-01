import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsPublishedPageComponent } from './apps-published-page.component';

describe('AppsPublishedPageComponent', () => {
  let component: AppsPublishedPageComponent;
  let fixture: ComponentFixture<AppsPublishedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsPublishedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsPublishedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
