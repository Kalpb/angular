import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadreComponent } from './headre.component';

describe('HeadreComponent', () => {
  let component: HeadreComponent;
  let fixture: ComponentFixture<HeadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
