import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AboutCompanyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AboutCompanyComponent
  ]
})
export class CompanyModule { }
