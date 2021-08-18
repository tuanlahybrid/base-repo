import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(userId: number) {
    if (!userId) throw new Error();
  }
}
