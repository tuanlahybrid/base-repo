import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserModule } from './app/modules/user/user.module';
import graphQLConfig from './config/graphql.config';

@Module({
  imports: [
    GraphQLModule.forRoot(graphQLConfig),
    TypeOrmModule.forRoot(),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
