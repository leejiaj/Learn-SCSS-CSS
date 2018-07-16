import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssTutorial1Component } from './scss-tutorial1.component';

describe('ScssTutorial1Component', () => {
  let component: ScssTutorial1Component;
  let fixture: ComponentFixture<ScssTutorial1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssTutorial1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssTutorial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
