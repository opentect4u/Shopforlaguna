import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminOrderPageSetUpComponent } from './Laguna_Admin/admin-order-page-set-up/admin-order-page-set-up.component';
import { AdmindashboardComponent } from './Laguna_Admin/admindashboard/admindashboard.component';
import { HomeComponent } from './Laguna_Admin/home/home.component';
import { AdminHeaderComponent } from './Laguna_Admin/Commonforadmin/header/header.component';
import { SidebarComponent } from './Laguna_Admin/Commonforadmin/sidebar/sidebar.component';
import { FooterComponent } from './Laguna_Admin/Commonforadmin/footer/footer.component';
import { RestaurentComponent } from './Laguna_Admin/restaurent/restaurent.component';
import { AdminOrderPageComponent } from './Laguna_Admin/order-page/order-page.component';
import { SalesAgentComponent } from './Laguna_Admin/sales-agent/sales-agent.component';
import { MenuSetUpComponent } from './Laguna_Admin/menu-set-up/menu-set-up.component';

import { FormsModule } from '@angular/forms';


import { MenuComponent } from './Restaurant/menu/menu.component';
import { LogosetupComponent } from './Restaurant/logosetup/logosetup.component';
import { SectionimagesComponent } from './Restaurant/sectionimages/sectionimages.component';
import { DisplaydaytimeComponent } from './Restaurant/displaydaytime/displaydaytime.component';
import { MenudataComponent } from './Restaurant/menudata/menudata.component';
import { ToastrModule } from 'ng6-toastr-notifications';






import { LoginComponent } from './Restaurant/reg_log/login/login.component';
import { RegistrationComponent } from './Restaurant/reg_log/registration/registration.component';
import { ForgotPassComponent } from './Restaurant/reg_log/forgot-pass/forgot-pass.component';
import { PaymentPageComponent } from './Restaurant/reg_log/payment-page/payment-page.component';
import { OrderPageComponent } from './Restaurant/reg_log/order-page/order-page.component';
import { HeaderComponent } from './Restaurant/reg_log/common/header/header.component';
import { SideBarComponent } from './Restaurant/reg_log/common/side-bar/side-bar.component';
import { MenuSetupComponent } from './Restaurant/menu-setup/menu-setup/menu-setup.component';
import { DashboardComponent } from './Restaurant/after_login/dashboard/dashboard.component';
import { ChangepassComponent } from './Restaurant/reg_log/changepass/changepass.component';
import { MenuSetupSidebarComponent } from './common/menu-setup-sidebar/menu-setup-sidebar.component';
import { RestaurantSetupComponent } from './Laguna_Admin/restaurant-setup/restaurant-setup.component';
import { AdminloginComponent } from './Laguna_Admin/adminlogin/adminlogin.component';

import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { ConfirmationmailComponent } from './Restaurant/confirmationmail/confirmationmail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user/user-menu/user-menu.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImageCropperModule } from 'ngx-image-cropper';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    AdminOrderPageSetUpComponent,
    AdmindashboardComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RestaurentComponent,
    OrderPageComponent,
    SalesAgentComponent,
    MenuSetUpComponent,
    AdminHeaderComponent,
    AdminOrderPageComponent,
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPassComponent,
    PaymentPageComponent,
    OrderPageComponent,
    HeaderComponent,
    SideBarComponent,
    MenuSetupComponent,
    DashboardComponent,
    ChangepassComponent,
    MenuSetupSidebarComponent,
    RestaurantSetupComponent,
    AdminloginComponent,
    AdminHeaderComponent,
    AdminOrderPageComponent,
    AppComponent,
    LoginComponent,
    // RegistrationComponent,
    ForgotPassComponent,
    PaymentPageComponent,
    OrderPageComponent,
    HeaderComponent,
    SideBarComponent,
    MenuSetupComponent,
    DashboardComponent,
    ChangepassComponent,
    MenuSetupSidebarComponent,
    MenuComponent,
    LogosetupComponent,
    SectionimagesComponent,
    DisplaydaytimeComponent,
    MenudataComponent,
    RestaurantSetupComponent,
    ThankyoupageComponent,
    ConfirmationmailComponent,
    UserMenuComponent

  ],


  //********** */

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatSlideToggleModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MatTooltipModule,
    ImageCropperModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule ,
    BrowserAnimationsModule
  ],
  exports:[CommonModule],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})

export class AppModule { }



