import { Deserializable } from './deserializable.dto';
import { Gender } from './gender.dto';
import { UserTypeId } from './user-type-id.dto';

export class User implements Deserializable {

  id: number;
  username: string;
  password: string;
  name: string;
  lastName: string;
  email: string;
  userIdType: UserTypeId;
  userId: number;
  phone: number;
  address: string;
  country: string;
  gender: Gender;

  deserialize(input: any) {
    Object.assign(new User(), JSON.parse(input));
    return this;
  }
}
