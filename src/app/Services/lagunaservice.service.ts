import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global_url_test } from '../global_url';
import { url_set } from '../globalvar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LagunaserviceService {
  url_reg = url_set.api_url;
  Url=global_url_test.URL+'package';
  _Url=global_url_test.URL+'promo';
  __url=global_url_test.URL+'holder_cling';
  holder_Url=global_url_test.URL+'holder_cling';
  constructor(private http:HttpClient,private router:Router){ }
  postpackagedata(v:any){//For Package Api In Admin order setup Page 
    console.log(v);
       return this.http.post(this.Url,v)
  }
  //api for admin login
  submit_log(v: any) {
    return this.http.post(url_set.api_url + '/login', v)
  }
 logout_service(){
    localStorage.clear();
    this.router.navigate(['/admin/login'])
  }
  getpackagedata(){//For Package Api Get in Admin Order setup Page
    return this.http.get(this.Url);
  }
  PostPromoCalendar(dt:any){//For Promocalendar Api Get in Admin Order setup Page
     return this.http.post(this._Url,dt);
  }
  GetPromoCalendar(){//For Promocalendar Api Get in Admin Order setup Page
    return this.http.get(this._Url);
 }
 Postsignupholder(dt:any){//For signUp  Api Post in Admin Order setup Page
  return this.http.post(this.__url,dt);
}
Getsignupholder(){//For signup Api Get in Admin Order setup Page
 return this.http.get(this.__url);
}
PostWIndowCling(dt:any){//For windowcling Api Post in Admin Order setup Page
  return this.http.post(this.holder_Url,dt);
}
GetWindowCling(){//For windowcling Api get in Admin Order setup Page
  return this.http.get(this.holder_Url);
}
get_menu_urls(id:any){//api to retireve urls for cover and top urls
  return this.http.get(url_set.api_url+'/menu_setup?id='+id)
}
//api to retrieve section urls
get_sec_url(menu_id:any,res_id:any){
  return this.http.get(url_set.api_url+'/section_image?id='+res_id + '&menu_id=' + menu_id)
}
//api to retrieve date and time value
get_set_time(menu_id:any,res_id:any){
  return this.http.get(url_set.api_url+'/date_time?id='+res_id + '&menu_id=' + menu_id)

}
//api to retrieve about us
get_about_us(res_id:any){
  return this.http.get(url_set.api_url+'/aboutus?id='+res_id)
}
post_about_us(about_txt:any,res_id:any){
  var dt={
    restaurant_id:res_id,
    aboutus:about_txt
  }

 return this.http.post(url_set.api_url+'/aboutus',dt);
}

//posting date and time
post_date_time(dt:any){
  return this.http.post(url_set.api_url+'/date_time',dt);
}
post_section_create(dt:any){
  return this.http.post(url_set.api_url+'/section',dt);
}
get_section_data(res_id:any,menu_id:any){
  
  return this.http.get(url_set.api_url+'/section?id='+res_id + '&menu_id=' + menu_id)
}
post_item_data(dt:any){
  return this.http.post(url_set.api_url+"/items",dt)
}
get_item_data(res_id:any,menu_id:any,section_id:any){
  return this.http.get(url_set.api_url+'/items?id='+res_id + '&menu_id=' + menu_id+'&sec_id='+section_id)
  
}
get_item_data_desc(v:any){
  return this.http.get(url_set.api_url+'/item_price?id='+v)
}
post_item_data_desc(dt:any){
  return this.http.post(url_set.api_url+"/item_price",dt)
}
get_special(v:any){
  return this.http.get(url_set.api_url+'/notice?id='+v);
}
post_special(dt:any){
  return this.http.post(url_set.api_url+'/notice',dt);
}
getrestaurant_check_menu_setup(v:any){
  return this.http.get(url_set.api_url+ '/check_menu_setup?id='+v);
}
get_admin_dashboard(){
  return this.http.get(url_set.api_url+'/res_details?id=')
}
get_specific_admin_dashboard(v:any){
  return this.http.get(url_set.api_url+'/res_details?id='+v)
}

//menu_url
get_menu_url(v:any){
   return this.http.get(url_set.api_url+'/get_url?id='+v)
}
get_qrcode(v:any){
  return this.http.post(url_set.api_url+'/generate_qr', v)

}

//view menu depending on the menuid
get_menu_by_time(dt:any){
  return this.http.get(url_set.api_url+'/preview_menu?id='+ dt.id + '&st_time=' + dt.st_time + '&end_time=' + dt.end_time);
}
post_approve_menu(dt:any){
  // const formdata=new FormData();
  // formdata.append(""dt);
  return this.http.post(url_set.api_url+'/approve_menu',dt)

}
send_admin_mail(v:any){
   return this.http.get(url_set.api_url+'/approve_menu?id='+v);
 
 }

 get_approval(v1:any,v2:any){
  return this.http.get(url_set.api_url+'/update_approval?flag='+v1+'&res_id='+v2)
}
get_menu_on_choice(v:any){
  return this.http.get(url_set.api_url+'/res_menu?id='+v)
}

// postimage(){
//   return this.http.post(url_set.api_url+'/testing',formdata)
// }

 
 
}
