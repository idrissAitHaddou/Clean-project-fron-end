import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './partials/hero/hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './partials/about/about.component';
import { OfferTypesComponent } from './partials/offer-types/offer-types.component';
import { RemarksComponent } from './partials/remarks/remarks.component';
import { ExplainComponent } from './partials/explain/explain.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    OfferTypesComponent,
    RemarksComponent,
    ExplainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
})
export class HomeModule { }
