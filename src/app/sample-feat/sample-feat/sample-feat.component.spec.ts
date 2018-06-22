import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFeatComponent } from './sample-feat.component';

describe('SampleFeatComponent', () => {
  let component: SampleFeatComponent;
  let fixture: ComponentFixture<SampleFeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
