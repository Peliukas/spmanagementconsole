import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedTournamentComponent } from '../../components/featured-tournament/featured-tournament.component';
import {MatCardModule, MatSelectModule, MatSnackBarModule, 
        MatTabsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, 
        MatButtonModule, MatListModule, MatIconModule, MatSlideToggleModule,
        MatDialogModule, MatProgressSpinnerModule, MatNativeDateModule, 
        MatDatepickerModule, MatExpansionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ImageUploadModule } from "angular2-image-upload";
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [FeaturedTournamentComponent],
  imports: [
    CommonModule, MatProgressSpinnerModule, MatCardModule, MatTabsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatCheckboxModule,
    MatIconModule, MatSnackBarModule, MatSelectModule, MatDialogModule,
    MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatSlideToggleModule,
    ReactiveFormsModule, HttpClientModule, 
    NgScrollbarModule, NgxMaterialTimepickerModule, ImageUploadModule.forRoot(), 
    BrowserModule.withServerTransition({ appId: 'serverApp' }), BrowserAnimationsModule,
  ],
  exports: [FeaturedTournamentComponent]
})
export class SharedComponentWrapperModule { }
