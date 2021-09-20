import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitterRightComponent } from './splitter-right.component';

describe('SplitterRightComponent', () => {
  let component: SplitterRightComponent;
  let fixture: ComponentFixture<SplitterRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitterRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitterRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
