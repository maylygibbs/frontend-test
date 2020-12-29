
import {Model} from './model';


/**
 * User model
 */
export class User extends Model {

  public id: number;
  public name: string;
  public lastName: string;

  /**
   * Get the user complete Name
   * @return string the complete name
   */
  get completeName(): string {   
    return this.name || this.lastName;    
  }

}

