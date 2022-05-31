import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QnsComponent } from './qns.component';

describe('QnsComponent', () => {
  let component: QnsComponent;
  let fixture: ComponentFixture<QnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
