import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewsCharedModule } from './views/views-chared/views-chared.module';
import { HomeModule } from './views/home/home.module';
import { JobsModule } from './views/jobs/jobs.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ViewsCharedModule,
    HomeModule,
    JobsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
