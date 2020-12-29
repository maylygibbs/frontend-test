import { Injectable } from '@angular/core';
import { CurrencyType } from '../models/currency-type';
import { AccountType } from '../models/account-type';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService {

   /**
   * Get the list of document models
   */
  get currencyTypes(): Array<CurrencyType> {
    return [
      new CurrencyType('$', 'Dolar'),
      new CurrencyType('€', 'Euro'),
      new CurrencyType('£', 'Lira'),
    ];
  }

  get accountToDebit(): Array<Account>{
    return [
      new Account('4344567134567767', new AccountType('Corriente')),
      new Account('4344567134561112', new AccountType('Corriente')),
      new Account('4344567134563346', new AccountType('Ahorro')),
    ];
  }

  get accountToAccredit(): Array<Account>{
    return [
      new Account('0134567134563456', new AccountType('Ahorro')),
      new Account('0134567134566789', new AccountType('Ahorro')),
      new Account('0134567134560000', new AccountType('Corriente')),
    ];
  }

}
