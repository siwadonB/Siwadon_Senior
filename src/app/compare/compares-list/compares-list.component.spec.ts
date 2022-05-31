import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparesListComponent } from './compares-list.component';

describe('ComparesListComponent', () => {
  let component: ComparesListComponent;
  let fixture: ComponentFixture<ComparesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
