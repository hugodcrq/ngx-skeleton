import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSkeletonComponent } from './ngx-skeleton.component';

describe('NgxSkeletonComponent', () => {
  let component: NgxSkeletonComponent;
  let fixture: ComponentFixture<NgxSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
