import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugLibComponent } from './bug-lib.component';

describe('BugLibComponent', () => {
  let component: BugLibComponent;
  let fixture: ComponentFixture<BugLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
