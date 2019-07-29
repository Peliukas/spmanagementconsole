import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SharedComponentWrapperModule } from '../shared-component-wrapper/shared-component-wrapper.module';
import {MatCardModule, MatSelectModule, MatSnackBarModule, 
  MatTabsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, 
  MatButtonModule, MatListModule, MatIconModule, MatSlideToggleModule,
  MatDialogModule, MatProgressSpinnerModule, MatNativeDateModule, 
  MatDatepickerModule, MatExpansionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    SharedComponentWrapperModule,
    CommonModule,MatCardModule, MatSelectModule, MatSnackBarModule, 
    MatTabsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, 
    MatButtonModule, MatListModule, MatIconModule, MatSlideToggleModule,
    MatDialogModule, MatProgressSpinnerModule, MatNativeDateModule, 
    MatDatepickerModule, MatExpansionModule, BrowserAnimationsModule
  ]
})
export class SpWebsiteModule { }
