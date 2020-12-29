
import {Model} from './model';
import { User } from './user';
import { AccountType } from './account-type';


/**
 * User model
 */
export class Account extends Model {

  public number: string;
  public type:AccountType;
  public user: User;

  constructor(
    number?: string,
    type?:AccountType,
    user?: User,
  ) {
    super();
    this.number = number;
    this.type = type;
  }


}

