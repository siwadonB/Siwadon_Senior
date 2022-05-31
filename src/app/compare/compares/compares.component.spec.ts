import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparesComponent } from './compares.component';

describe('ComparesComponent', () => {
  let component: ComparesComponent;
  let fixture: ComponentFixture<ComparesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
