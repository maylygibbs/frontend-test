import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

/**
 * get item of localStorage
 * @param key 
 */
  getItem(key:string):Array<any>{
    let transactions = localStorage.getItem(key);
    if(transactions){
      return JSON.parse(transactions); 
    }else{
      return new Array<any>()
    }
  }

/**
 * set item localStorage
 * @param key 
 * @param transactions 
 */
  setItem(key:string,transactions:Array<any>){
    localStorage.setItem(key, JSON.stringify(transactions));   
  }

  updateItem(key:string,transactions:Array<any>){
    let transactionsTemp = localStorage.getItem(key);
    if(transactionsTemp){
      return localStorage.removeItem(key)
    }else{
      localStorage.setItem(key, JSON.stringify(transactions));
    } 
  }
}
