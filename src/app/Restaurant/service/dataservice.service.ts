import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { url_set } from 'src/app/globalvar';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  url_reg = url_set.api_url + '/registration';

  // url_reg='http://localhost:3000/reg';
  constructor(private http: HttpClient) { }
  //submitting registration data
  submit_reg(v: any) {
    console.log(v);
    console.log({ res: this.http.post(this.url_reg, v) })
    return this.http.post(this.url_reg, v, { responseType: 'text' });
  }
  //checking existing emails
  check_existing_email(v_email: any) {
    return this.http.get(url_set.api_url + '/email_check?Email=' + v_email)
  }
  //country API
  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }
  //retrieving package data for order
  getPackage() {
    return this.http.get(url_set.api_url + '/package')
  }
  //retrieving promo data for order
  getPromo() {
    return this.http.get(url_set.api_url + '/promo')
  }
  //retrieving holder data for order
  getHoldercling() {
    return this.http.get(url_set.api_url + '/holder_cling')
  }
  // sending order data
  sendOrderData(dt: any) {
    console.log(dt);
    return this.http.post(url_set.api_url + '/order', dt)
  }
  //sending payment data after order_page
  sendPaymentData(v: any) {
    console.log(v);
    return this.http.post(url_set.api_url + '/pay', v);
  }
  //for login
  submit_log(v: any) {
    return this.http.post(url_set.api_url + '', v)
  }
  submit_breakfast_menu_setup(dt:any) {
    return this.http.post(url_set.api_url+'/breakfast',dt)
  }
}
