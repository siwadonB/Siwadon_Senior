import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesListComponent } from './manages-list.component';

describe('ManagesListComponent', () => {
  let component: ManagesListComponent;
  let fixture: ComponentFixture<ManagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
