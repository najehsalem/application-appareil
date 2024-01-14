import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparielDashboardComponent } from './appariel-dashboard.component';

describe('ApparielDashboardComponent', () => {
  let component: ApparielDashboardComponent;
  let fixture: ComponentFixture<ApparielDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApparielDashboardComponent]
    });
    fixture = TestBed.createComponent(ApparielDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
