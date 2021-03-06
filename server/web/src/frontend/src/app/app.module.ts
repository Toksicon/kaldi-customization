import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatSelectModule,
  MatDividerModule,
  MatInputModule,
  MatTableModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatTooltipModule
} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { CoverComponent } from './cover/cover.component';
import { DecodingUploadComponent } from './upload/decoding/decoding.upload.component';
import { DecodingOverviewComponent } from './upload/decoding/overview/decoding.overview.component';
import { TrainingUploadComponent } from './upload/training/training.upload.component';
import { TrainingOverviewComponent } from './upload/training/overview/training.overview.component';
import { ApiModule } from 'swagger-client';
import { IdentityService } from '../identity.service';

import { TileComponent } from './dashboard/tile/tile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SafePipe } from './safe.pipe';
import { ReversePipe } from './reverse.pipe';
import { StatusMessagePipe } from './status.message.pipe';
import { TypeMessagePipe } from './type.message.pipe';
import { LanguageMessagePipe } from './language.message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectComponent,
    CoverComponent,
    DecodingUploadComponent,
    DecodingOverviewComponent,
    TrainingUploadComponent,
    TrainingOverviewComponent,
    TileComponent,
    LoginComponent,
    RegisterComponent,
    SafePipe,
    ReversePipe,
    StatusMessagePipe,
    TypeMessagePipe,
    LanguageMessagePipe
  ],
  imports: [
    ApiModule.forRoot(IdentityService.getApiConfiguration),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
