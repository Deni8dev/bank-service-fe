import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    // TODO: Manage Errors
    console.log(`Manage Error Here`);
  }
}
