import { Injectable } from '@angular/core';
import { Subject, Observable, ReplaySubject } from 'rxjs';
import { Transaction } from '../models/transaction';
import { extend } from 'webdriver-js-extender';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends StorageService{

  //private transactions$ = new Subject<Array<Transaction>>();

  private transactionsSource = new ReplaySubject<Array<Transaction>>();
  public transactions$ = this.transactionsSource.asObservable();

  setTransactions$(transactions:Array<Transaction>){
    this.transactionsSource.next(transactions);
  }

  getTransactions(){
    let transactions = this.getItem('transactions');
    this.setTransactions$(transactions);
    
  }
  /**
   * create transaction item
   * @param transaction 
   */
  create(transaction:Transaction){

    let transactions = this.getItem('transactions');
    transactions.push(transaction);
    this.setItem('transactions',transactions);
    this.setTransactions$(transactions);
  }
  /**
   * delete transaction item
   * @param transaction 
   */
  delete(transaction:Transaction){
    let transactions = this.getItem('transactions');
    const index = transactions.findIndex(trx => trx.id === transaction.id);
    transactions = transactions.splice(index,1);
    this.setItem('transactions',transactions.splice(index,1));
    this.setTransactions$(transactions);
  }

  
}
