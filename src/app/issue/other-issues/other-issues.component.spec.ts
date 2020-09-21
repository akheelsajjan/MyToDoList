import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherIssuesComponent } from './other-issues.component';

describe('OtherIssuesComponent', () => {
  let component: OtherIssuesComponent;
  let fixture: ComponentFixture<OtherIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
