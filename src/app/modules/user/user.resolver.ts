import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserResponse } from 'src/app/graphql/graphql.schema';
import { BaseResolver } from 'src/vendors/base/base.resolver';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver extends BaseResolver {
  constructor(private readonly userService: UserService) {
    super();
  }

  @Query('user')
  getUser(@Args('email') email: string): UserResponse {
    throw new UnauthorizedException('sdfjaskdfkjasldfj');

    return this.response({
      id: 'sdfsdf',
      email: 'jsldkfj',
      password: 'String',
      name: 'String',
      phoneNumber: 'String',
      isVerified: true,
    });
  }
}
