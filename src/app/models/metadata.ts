
import {Model} from './model';
import { SelectOption } from './select-option';


/**
 * User model
 */
export class Metadata extends Model {

  public inputKey: SelectOption;
  public inputValue: SelectOption;

  constructor(inputKey?:SelectOption,
    inputValue?:SelectOption){
    super();
    this.inputKey = inputKey;
    this.inputValue = inputValue;

  }

}

