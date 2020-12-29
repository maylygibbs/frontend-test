import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsLayoutComponent } from './commons-layout.component';

describe('CommonsLayoutComponent', () => {
  let component: CommonsLayoutComponent;
  let fixture: ComponentFixture<CommonsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
