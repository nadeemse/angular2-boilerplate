import { Component, OnInit } from '@angular/core';

import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { ToasterService } from '../../core/toaster/toaster.service';
import { Toaster } from '../../core/toaster/toaster';


@Component({
  selector: 'barrat-toaster',
  template: '<ng2-toasty [position]="\'top-right\'"></ng2-toasty>'
})
export class ToasterComponent implements OnInit {
  toastOptions: ToastOptions;
  toaster: Toaster;
  constructor(
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private toasterServ: ToasterService
    ) { 
      this.toastyConfig.theme = 'bootstrap';
       this.toastOptions = {
            title: 'My title',
            msg: 'The message',
            showClose: true,
            timeout: 8000,
            theme: 'bootstrap',
            onAdd: (toast: ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast: ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
    }

    ngOnInit() {
    this.toasterServ.toasterCalled.subscribe(
      (toaster: Toaster) => {
          this.toaster = toaster;
          this.toastOptions.title = this.toaster.title;
          this.toastOptions.msg = this.toaster.description;
          switch(this.toaster.toastType) {
              case 'info':
                this.info();
              break;
              case 'success':
                this.success();
              break;
              case 'warning':
                this.warning();
              break;
              case 'error':
                this.error();
              break;
              default:
                this.wait();
          }
      }
    );
    }

    info() {
        this.toastyService.info(this.toastOptions);
    }
    warning() {
        this.toastyService.warning(this.toastOptions);
    }
    error() {
        this.toastyService.error(this.toastOptions);
    }
    wait() {
         this.toastyService.wait(this.toastOptions);
    }
    success() {
        this.toastyService.success(this.toastOptions);
    }
}
