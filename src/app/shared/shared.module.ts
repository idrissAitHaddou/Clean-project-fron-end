import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWhiteComponent } from './button/button-white/button-white.component';
import { IconTitleVerticalComponent } from './icon/icon-title-vertical/icon-title-vertical.component';
import { ButtonPrimaryComponent } from './button/button-primary/button-primary.component';
import { ButtonWaringComponent } from './button/button-waring/button-waring.component';
import { ButtonDangerComponent } from './button/button-danger/button-danger.component';
import { ButtonSuccessComponent } from './button/button-success/button-success.component';



@NgModule({
  declarations: [
    ButtonWhiteComponent,
    IconTitleVerticalComponent,
    ButtonPrimaryComponent,
    ButtonWaringComponent,
    ButtonDangerComponent,
    ButtonSuccessComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonWhiteComponent,
    IconTitleVerticalComponent,
    ButtonPrimaryComponent,
    ButtonWaringComponent,
    ButtonDangerComponent,
    ButtonSuccessComponent
  ]
})
export class SharedModule { }
