
import { Model } from './model';
import { Account } from './account';
import { CurrencyType } from './currency-type';



/**
 * User model
 */
export class Transaction extends Model {

  public id: number;
  public accountToDebit: Account;
  public accountToAccredit: Account;
  public amount: number;
  public currencyType: CurrencyType;
  public fee: boolean;
  public metadata: Array<any>;
  public creationDate: Date;

  constructor(
    id?: number,
    accountToDebit?: Account,
    accountToAccredit?: Account,
    amount?: number,
    currencyType?: CurrencyType,
    fee?: boolean,
    metadata?: Array<any>,
    creationDate?: Date

  ) {
    super();
    this.id = id;
    this.accountToDebit = accountToDebit;
    this.accountToAccredit = accountToAccredit;
    this.amount = amount;
    this.currencyType = currencyType;
    this.fee = fee;
    this.metadata = metadata;
    this.creationDate = creationDate;
  }

  

  get disabled(): boolean {
    return this.id % 2 === 0;
  }

}

