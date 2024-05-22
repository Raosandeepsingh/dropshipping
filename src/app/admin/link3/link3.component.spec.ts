import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link3Component } from './link3.component';

describe('Link3Component', () => {
  let component: Link3Component;
  let fixture: ComponentFixture<Link3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Link3Component]
    });
    fixture = TestBed.createComponent(Link3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
