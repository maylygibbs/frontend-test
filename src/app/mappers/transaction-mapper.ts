import { Transaction } from '../models/transaction';
import { Account } from '../models/account';
import { CurrencyType } from '../models/currency-type';


/**
 * Class mapper values to model transaction
 */
export class TransactionMapper {

    static mapperToModel(id:number,obj: any, currencyTypes: Array<CurrencyType>): Transaction {
        const index = currencyTypes.findIndex((item)=> item.value===obj.amountSuffixe);
        return new Transaction(
            id+1,
            new Account(obj.accountToDebit),
            new Account(obj.accountToAccredit),
            obj.amount,
            new CurrencyType(obj.amountSuffixe, currencyTypes[index].label),
            obj.fee,
            obj.metadatas,
            new Date()
        );
    }
}
