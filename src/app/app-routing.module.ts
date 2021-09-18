import { NgModule } from '@angular/core';

// import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Laguna_Admin/home/home.component';
import { AdminOrderPageComponent } from './Laguna_Admin/order-page/order-page.component';
import { RestaurentComponent } from './Laguna_Admin/restaurent/restaurent.component';
import { SalesAgentComponent } from './Laguna_Admin/sales-agent/sales-agent.component';

import { FormArray } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Restaurant/after_login/dashboard/dashboard.component';
import { MenuSetupComponent } from './Restaurant/menu-setup/menu-setup/menu-setup.component';
import { ChangepassComponent } from './Restaurant/reg_log/changepass/changepass.component';
import { ForgotPassComponent } from './Restaurant/reg_log/forgot-pass/forgot-pass.component';
import { LoginComponent } from './Restaurant/reg_log/login/login.component';
import { OrderPageComponent } from './Restaurant/reg_log/order-page/order-page.component';
import { PaymentPageComponent } from './Restaurant/reg_log/payment-page/payment-page.component';
import { RegistrationComponent } from './Restaurant/reg_log/registration/registration.component';
import { MenuComponent } from './Restaurant/menu/menu.component';
import { LogosetupComponent } from './Restaurant/logosetup/logosetup.component';
import { SectionimagesComponent } from './Restaurant/sectionimages/sectionimages.component';
import { DisplaydaytimeComponent } from './Restaurant/displaydaytime/displaydaytime.component';
import { MenudataComponent } from './Restaurant/menudata/menudata.component';


const routes: Routes = [
  {
    path:'adminhome',

    component:HomeComponent
  },
  {
    path:'admin/restaurent',
    component:RestaurentComponent
  },
  {
    path:'admin/OrderPagesertup',
    component:AdminOrderPageComponent
  },
  {
    path:'admin/salesagent',
    component:SalesAgentComponent
  },
  {
   path:'',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'forgot-password',
    component:ForgotPassComponent
  },
  {
    path:'order/:id',
    component:OrderPageComponent

  },
  {
    path:'payment/:id',
    component:PaymentPageComponent
  },
  {
    path:'menu_setup',
    component:MenuSetupComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'changepass',
    component:ChangepassComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'logo-setup',
    component:LogosetupComponent
  },
  {
    path:'sectionimage',
    component:SectionimagesComponent
  },
  {
    path:'displaydayandtime',
    component:DisplaydaytimeComponent
  },
  {
    path:'menudata',
    component:MenudataComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


