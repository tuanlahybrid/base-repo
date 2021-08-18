import {
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
  Catch,
} from '@nestjs/common';
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';

@Catch(Error)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    console.log('Error: ', exception);
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
        // details: [],
      },
    };
  }

  httpExceptionHandler(exception: HttpException) {
    return {
      statusCode: exception.getStatus(),
      data: null,
      error: {
        errorCode: exception.getResponse()['code'],
        message: exception.message,
        // details: [],
      },
    };
  }
}
