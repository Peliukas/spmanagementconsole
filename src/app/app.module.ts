import { SpWebsiteModule } from './modules/sp-website/sp-website.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddModelComponent } from './components/add-model/add-model.component';
import { ApiConfig } from './api-config';
import { ListModelsComponent } from './components/list-models/list-models.component';
import { ClubMembersComponent } from './components/club-members/club-members.component';
import { AgeConverterPipe } from './pipes/age-converter.pipe';
import { UnassignedFighterListComponent } from './components/unassigned-fighter-list/unassigned-fighter-list.component';
import { ResultFilterComponent } from './components/result-filter/result-filter.component';
import { CreateFightComponent } from './components/create-fight/create-fight.component';
import { FighterCardComponent } from './components/fighter-card/fighter-card.component';
import { TournamentFightManagerComponent } from './components/tournament-fight-manager/tournament-fight-manager.component';
import { HomepageComponent } from './modules/sp-website/components/homepage/homepage.component';
import { MainUserMenuComponent } from './components/main-user-menu/main-user-menu.component';
import { PageConfigurationScreenComponent } from './components/page-configuration-screen/page-configuration-screen.component';
import { SharedComponentWrapperModule } from './modules/shared-component-wrapper/shared-component-wrapper.module'; 
import { ImageCropperModule } from 'ng2-img-cropper'; 
import {MatCardModule, MatSelectModule, MatSnackBarModule, 
  MatTabsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
  MatButtonModule, MatListModule, MatIconModule, MatSlideToggleModule,
  MatDialogModule, MatProgressSpinnerModule, MatNativeDateModule, 
  MatDatepickerModule, MatExpansionModule} from '@angular/material';
import { SlickModule } from 'ngx-slick';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ImageUploadModule } from "angular2-image-upload";
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ColorPickerModule } from 'ngx-color-picker';
import { SpColorPickerComponent } from './components/sp-color-picker/sp-color-picker.component';
import { SponsorManagementComponent } from './components/sponsor-management/sponsor-management.component';
import { ImageCropperWithUploadComponent } from './components/image-cropper-with-upload/image-cropper-with-upload.component';

const appRoutes: Routes = [
  { 
    path: 'admin/list/:modelName',
    component: ListModelsComponent
  },
  { 
    path: 'admin/add/:modelName',
    component: AddModelComponent
  },
  { 
    path: 'admin/edit/:modelName/:id',
    component: AddModelComponent
  },
  { 
    path: 'admin/pageconfig',
    component: PageConfigurationScreenComponent
  },
  { 
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    AddModelComponent,
    ListModelsComponent,
    ClubMembersComponent,
    AgeConverterPipe,
    UnassignedFighterListComponent,
    ResultFilterComponent,
    CreateFightComponent,
    FighterCardComponent,
    TournamentFightManagerComponent,
    MainUserMenuComponent,
    PageConfigurationScreenComponent,
    SpColorPickerComponent,
    SponsorManagementComponent,
    ImageCropperWithUploadComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    SpWebsiteModule, SharedComponentWrapperModule, RouterModule, MatProgressSpinnerModule, MatCardModule, MatTabsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule,ColorPickerModule, 
    MatIconModule, MatSnackBarModule, MatSelectModule, MatDialogModule, MatCheckboxModule,
    MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatSlideToggleModule,
    ReactiveFormsModule, HttpClientModule, ImageCropperModule,
    NgScrollbarModule, NgxMaterialTimepickerModule, ImageUploadModule.forRoot(), 
    BrowserModule.withServerTransition({ appId: 'serverApp' }), BrowserAnimationsModule, SlickModule.forRoot()
  ],
  providers: [ApiConfig],
  bootstrap: [AppComponent],
  entryComponents: [UnassignedFighterListComponent, CreateFightComponent, ImageCropperWithUploadComponent],
})
export class AppModule { }
