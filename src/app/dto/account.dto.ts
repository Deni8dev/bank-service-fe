import { Deserializable } from './deserializable.dto';

export class Account implements Deserializable {

  id: number;
  accountNumber: string;
  balance: number;
  userId: number;

  deserialize(input: any) {
    Object.assign(this, JSON.parse(input));
    return this;
  }
}
