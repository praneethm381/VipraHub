import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OrderModule } from 'ngx-order-pipe';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {UploadDownloadComponent} from './upload/upload.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogService } from './dialog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilesService } from './files.service';
import {  ModelsService } from './models.service';
import { ShowImageComponent } from './showimage/showimage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SearchComponent,
    UserdashboardComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    UploadDownloadComponent,
    FileSelectDirective,
    FileDropDirective,
    ShowImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule,
    OrderModule,
    ChartsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    DialogService,
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA,useValue:{}},
    FilesService,
    ModelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
