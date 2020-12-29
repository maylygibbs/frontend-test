import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSubmitComponent } from './transaction-submit.component';

describe('TransactionSubmitComponent', () => {
  let component: TransactionSubmitComponent;
  let fixture: ComponentFixture<TransactionSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
