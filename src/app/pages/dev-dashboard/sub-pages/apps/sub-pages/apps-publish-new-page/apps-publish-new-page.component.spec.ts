import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsPublishNewPageComponent } from './apps-publish-new-page.component';

describe('AppsPublishNewPageComponent', () => {
  let component: AppsPublishNewPageComponent;
  let fixture: ComponentFixture<AppsPublishNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsPublishNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsPublishNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
