import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link5Component } from './link5.component';

describe('Link5Component', () => {
  let component: Link5Component;
  let fixture: ComponentFixture<Link5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Link5Component]
    });
    fixture = TestBed.createComponent(Link5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
