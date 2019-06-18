import { Deserializable } from './deserializable.dto';
import { MovementType } from './movement-type.dto';
import { UserTypeId } from './user-type-id.dto';

export class Movement implements Deserializable {

  id: number;
  type: MovementType;
  value: number;
  date: Date;
  thirdPartyAccount: string;
  thirdPartyId: string;
  thirdPartyIdType: UserTypeId;
  thirdPartyName: string;
  approval: boolean;
  accountId: number;

  deserialize(input: any) {
    Object.assign(this, JSON.parse(input));
    return this;
  }
}
