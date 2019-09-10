import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {routing} from './app.routing';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { ContactComponent } from './contact/contact.component';
// import {ModalModule} from 'ngb-modal';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import { HeaderFooterComponent } from './header-footer/header-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ModalPopupComponent,
    ContactComponent,
    HeaderFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,routing,
    AngularFileUploaderModule
    // ModalModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
