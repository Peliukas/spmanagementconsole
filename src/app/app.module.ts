import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule, MatSelectModule, MatSnackBarModule, 
        MatTabsModule, MatFormFieldModule, MatInputModule, 
        MatButtonModule, MatListModule, MatIconModule,
        MatDialogModule, MatProgressSpinnerModule,
        MatDialog} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddModelComponent } from './components/add-model/add-model.component';
import { ApiConfig } from './api-config';
import { ListModelsComponent } from './components/list-models/list-models.component';
import { ModelManagerComponent } from './components/model-manager/model-manager.component';
import { ImageUploadModule } from "angular2-image-upload";
import { ClubMembersComponent } from './components/club-members/club-members.component';
import { AgeConverterPipe } from './pipes/age-converter.pipe';
import { UnassignedFighterListComponent } from './components/unassigned-fighter-list/unassigned-fighter-list.component';
import { ResultFilterComponent } from './components/result-filter/result-filter.component';


const appRoutes: Routes = [
  { 
    path: 'list/:modelName',
    component: ListModelsComponent
  },
  { 
    path: 'add/:modelName',
    component: AddModelComponent
  },
  { 
    path: 'edit/:modelName/:id',
    component: AddModelComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    AddModelComponent,
    ListModelsComponent,
    ModelManagerComponent,
    ClubMembersComponent,
    AgeConverterPipe,
    UnassignedFighterListComponent,
    ResultFilterComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    ImageUploadModule.forRoot(),
    ReactiveFormsModule, HttpClientModule, RouterModule, MatProgressSpinnerModule,
    BrowserModule, BrowserAnimationsModule, MatCardModule, MatTabsModule,
     MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule,
     MatIconModule, MatSnackBarModule, MatSelectModule, MatDialogModule
  ],
  providers: [ApiConfig],
  bootstrap: [AppComponent],
  entryComponents: [UnassignedFighterListComponent],
})
export class AppModule { }
