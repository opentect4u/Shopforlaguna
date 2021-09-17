
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
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
    MenuSetupSidebarComponent
  ],


  //********** */

  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }

