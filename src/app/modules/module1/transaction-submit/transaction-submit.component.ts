import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { InMemoryService } from '../../../services/in-memory.service';
import { CurrencyType } from '../../../models/currency-type';
import { Account } from '../../../models/account';
import { TransactionService } from '../../../services/transaction.service';
import { TransactionMapper } from '../../../mappers/transaction-mapper';

import { Transaction } from '../../../models/transaction';

@Component({
  selector: 'app-transaction-submit',
  templateUrl: './transaction-submit.component.html',
  styleUrls: ['./transaction-submit.component.scss']
})
export class TransactionSubmitComponent implements OnInit {
  transactions:Array<Transaction>;
  validateForm!: FormGroup;
  currencyTypes: Array<CurrencyType>;
  accountsToDebit: Array<Account>;
  accountsToAccredit: Array<Account>;
  metadatas: FormArray;
 

  

  constructor(
    private fb: FormBuilder,
    private inMemoryService: InMemoryService,
    private transactionService:TransactionService) { }

  ngOnInit(): void {

    this.transactionService.transactions$.subscribe(
      data => {
        this.transactions = data;
        console.log('transactions',this.transactions);
      }
    );
    this.transactionService.getTransactions();

    this.accountsToDebit = this.inMemoryService.accountToDebit;
    this.accountsToAccredit = this.inMemoryService.accountToAccredit;
    this.currencyTypes = this.inMemoryService.currencyTypes;

    this.validateForm = this.fb.group({
      accountToDebit: [null, [Validators.required]],
      amount: [null, [Validators.required, Validators.pattern(/^-?([1-9]\d*)?$/)]],
      amountSuffixe: ['$'],
      accountToAccredit: [null, [Validators.required]],
      fee: [false, [Validators.required]],
      metadatas: this.fb.array([ this.createMetadata() ])
      
    });

  }
/**
 * create metadata control
 */
  createMetadata(): FormGroup {
    return this.fb.group({
      key: [null, [Validators.required]],
      value: [null, [Validators.required]]
    });
  }
/**
 * add new metadata obj
 * @param e
 */
  addMetadata(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    this.metadatas = this.validateForm.get('metadatas') as FormArray;
    this.metadatas.push(this.createMetadata());
  }

  /**
   * delete metadata control
   * @param metadata 
   */
  deleteMetadata(i:number,e?: MouseEvent){
    if (e) {
      e.preventDefault();
    }
    this.metadatas = this.validateForm.get('metadatas') as FormArray;
    if (this.metadatas.length > 1) {
      this.metadatas.removeAt(i);
    }
  }



  submitForm() {
    console.log('validateForm',this.validateForm.value);
      this.transactionService.create(TransactionMapper.mapperToModel(this.transactions.length,this.validateForm.value,this.currencyTypes))
      this.validateForm.reset();
  }

}
