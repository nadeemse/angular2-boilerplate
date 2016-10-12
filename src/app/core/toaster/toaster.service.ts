import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Toaster } from '../../core/toaster/toaster';

@Injectable()
export class ToasterService {

 toasterCalled = new EventEmitter<Toaster>();
 toaster: Toaster;
  constructor() {}

  emitEvent(toaster: Toaster) {
      this.toaster = toaster;
      this.toasterCalled.emit(this.toaster);
  }


}
