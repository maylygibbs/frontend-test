import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-transactions-display',
  templateUrl: './transactions-display.component.html',
  styleUrls: ['./transactions-display.component.scss']
})
/**
 * Display transactions component
 */
export class TransactionsDisplayComponent implements OnInit {

  transactions: Array<Transaction>;
  visible = false;
  listOfCurrentPageData: Array<Transaction> = new Array<Transaction>();
  setOfCheckedId = new Set<number>();
  checked = false;
  loading = false;
  indeterminate = false;

  idFilterValue: string;
  idFilterControl = new FormControl();
  transactionsSub: Subscription;
  formIdFilterCtrlSub: Subscription;
  resizeSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions();
  }

  /**
   * 
   * @param transaction 
   * @param e 
   */
  deleteTransaction(transaction: Transaction, e?: Event) {
    if (e) {
      e.preventDefault();
    }
    this.transactionService.delete(transaction);
  }

  /**
   * 
   * @param transactions 
   */
  onCurrentPageDataChange(transactions: Array<Transaction>): void {
    this.listOfCurrentPageData = transactions;
    this.refreshCheckedStatus();
  }

  /**
   * 
   * @param checked 
   */
  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  /**
   * 
   * @param id 
   * @param checked 
   */
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  /**
   * 
   */
  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  /**
   * 
   * @param id 
   * @param checked 
   */
  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  search(filter: string): void {
    this.transactionService.getTransactions();
    this.visible = false;
    this.transactions = this.transactions.filter((item: Transaction) => String(item.id).indexOf(filter) !== -1);
  }

  ngAfterViewInit() {

    this.transactionsSub = this.transactionService.transactions$.subscribe(
      data => {
        this.transactions = data;
      }
    );

    // debounce keystroke events    
    this.formIdFilterCtrlSub = this.idFilterControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(newValue => this.search(newValue));
  }

  ngOnDestroy() {
    this.formIdFilterCtrlSub.unsubscribe();
    this.transactionsSub.unsubscribe();
  }

}
