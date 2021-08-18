import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserResponse } from 'src/app/graphql/graphql.schema';
import { ERROR_CODE } from 'src/common/error-code/error-code';
import { BaseResolver } from 'src/vendors/base/base.resolver';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver extends BaseResolver {
  constructor(private readonly userService: UserService) {
    super();
  }

  @Query('user')
  getUser(@Args('email') email: string): UserResponse {
    // throw new HttpException(ERROR_CODE.BAD_REQUEST, HttpStatus.BAD_REQUEST);
    // throw new BadRequestException(ERROR_CODE.BAD_REQUEST);

    return this.response({
      id: 'ID-1',
      email: 'test@gmail.com',
      password: '*********',
      name: 'Le Thi Thanh Huyen',
      phoneNumber: '**********',
      isVerified: true,
    });
  }
}
