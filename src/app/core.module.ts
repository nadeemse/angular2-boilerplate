import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [DropdownDirective, MainComponent],
    exports: [DropdownDirective]
})
export class CoreModule {}