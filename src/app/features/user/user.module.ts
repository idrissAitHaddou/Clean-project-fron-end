import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUserComponent } from './components/about-user/about-user.component';
import { SocialProfilesUserComponent } from './components/social-profiles-user/social-profiles-user.component';
import { ExperienceUserComponent } from './components/experience-user/experience-user.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AboutUserComponent,
    SocialProfilesUserComponent,
    ExperienceUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AboutUserComponent,
    SocialProfilesUserComponent,
    ExperienceUserComponent,
  ]
})
export class UserModule { }
