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
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatCardModule, MatSelectModule, MatSnackBarModule, 
  MatTabsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
  MatButtonModule, MatListModule, MatIconModule, MatSlideToggleModule,
  MatDialogModule, MatProgressSpinnerModule, MatNativeDateModule, 
  MatDatepickerModule, MatExpansionModule, MatMenuModule} from '@angular/material';
import { SlickModule } from 'ngx-slick';
import { ScrollEventModule } from 'ngx-scroll-event';

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
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowseFightsComponent } from './components/browse-fights/browse-fights.component';
import { VideoListCardComponent } from './components/video-list-card/video-list-card.component';
import { VideoFilterSidebarComponent } from './components/video-filter-sidebar/video-filter-sidebar.component';
import { VideoPlayerWindowComponent } from './components/video-player-window/video-player-window.component';
import { FightersComponent } from './components/fighters/fighters.component';
import { FighterProfileComponent } from './components/fighter-profile/fighter-profile.component';
import { FightclubsComponent } from './components/fightclubs/fightclubs.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TournamentProfileComponent } from './components/tournament-profile/tournament-profile.component';
import { FightclubProfileComponent } from './components/fightclub-profile/fightclub-profile.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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
    path: 'admin/dashboard',
    component: AdmindashboardComponent
  },
  { 
    path: 'videos',
    component: BrowseFightsComponent
  },
  { 
    path: 'fighters',
    component: FightersComponent,
    data: {state: 'fighters'}
  },
  { 
    path: 'fighters/:fighterid',
    component: FighterProfileComponent
  },
  { 
    path: 'fightclubs',
    component: FightclubsComponent,
    data: {state: 'fightclubs'}
  },
  { 
    path: 'fightclubs/:fightclubid',
    component: FightclubProfileComponent
  },
  { 
    path: 'tournaments',
    component: TournamentsComponent,
    data: {state: 'tournaments'}
  },
  { 
    path: 'tournaments/:tournamentid',
    component: TournamentProfileComponent
  },
  { 
    path: '',
    component: HomepageComponent
  },
  { 
    path: 'sp-login',
    component: LoginPageComponent
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
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
    ImageCropperWithUploadComponent,
    LoginPageComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    BrowseFightsComponent,
    VideoListCardComponent,
    VideoFilterSidebarComponent,
    VideoPlayerWindowComponent,
    FightersComponent,
    FighterProfileComponent,
    FightclubsComponent,
    TournamentsComponent,
    TournamentProfileComponent,
    FightclubProfileComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    SpWebsiteModule, SharedComponentWrapperModule, RouterModule, MatProgressSpinnerModule, MatCardModule, MatTabsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule,ColorPickerModule, 
    MatIconModule, MatSnackBarModule, MatSelectModule, MatDialogModule, MatCheckboxModule,
    MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatSlideToggleModule, MatMenuModule,
    ReactiveFormsModule, HttpClientModule, ImageCropperModule, AngularFontAwesomeModule,
    NgScrollbarModule, NgxMaterialTimepickerModule, ImageUploadModule.forRoot(), 
    BrowserModule.withServerTransition({ appId: 'serverApp' }), BrowserAnimationsModule, SlickModule.forRoot(),
    ScrollEventModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [ApiConfig],
  bootstrap: [AppComponent],
  entryComponents: [UnassignedFighterListComponent, CreateFightComponent, ImageCropperWithUploadComponent, VideoPlayerWindowComponent],
})
export class AppModule { }
