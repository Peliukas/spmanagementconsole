import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SharedComponentWrapperModule } from '../shared-component-wrapper/shared-component-wrapper.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    SharedComponentWrapperModule,
    CommonModule
  ]
})
export class SpWebsiteModule { }
