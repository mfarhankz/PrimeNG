import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitterLeftComponent } from './splitter-left.component';

describe('SplitterLeftComponent', () => {
  let component: SplitterLeftComponent;
  let fixture: ComponentFixture<SplitterLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitterLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitterLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
