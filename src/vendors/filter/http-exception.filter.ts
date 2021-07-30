import {
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
  Catch,
} from '@nestjs/common';
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';

@Catch()
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    console.log('error: ', exception);
    const gqlHost = GqlArgumentsHost.create(host);
    if (exception instanceof HttpException) {
      return this.httpExceptionHandler(exception);
    }
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      data: null,
      error: {
        errorCode: HttpStatus.BAD_REQUEST,
        message: exception.message,
        details: [],
      },
    };
  }
  httpExceptionHandler(exception: HttpException) {
    const error: any = exception.message;
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      data: null,
      error: {
        errorCode: exception.getStatus(),
        message: error,
        details: [],
      },
    };
  }
}
