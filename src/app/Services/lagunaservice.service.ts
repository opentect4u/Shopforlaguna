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
    this.router.navigate(['/admin'])
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
// get_menu_urls(res_id:any, m_id: any){
//   var menu_id = m_id > 0 ? m_id : '';
//   return this.http.get(url_set.api_url+'/section_image?id='+res_id + '&menu_id=' + menu_id)
// }
get_menu_urls(res_id:any, m_id: any){//api to retireve urls for cover and top urls
  var menu_id = m_id > 0 ? m_id : '';
  return this.http.get(url_set.api_url+'/menu_setup?id='+res_id + '&menu_id=' + menu_id)
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
//create section
// post_section_create(dt:any,file:any){
//   const formdata=new FormData();
//   formdata.append('restaurant_id',dt.restaurant_id);
//   formdata.append('menu_id',dt.menu_id);
//   formdata.append('sec_name',dt.sec_name);
//   formdata.append('sec_img',file);
//   formdata.append('id',dt.id > 0 ? dt.id : 0);
//   return this.http.post(url_set.api_url+'/section',formdata);
// }
post_section_create(dt:any,file:any,filename:any){
  const formdata=new FormData();
  console.log(dt.menu_id,file);
  
  formdata.append('restaurant_id',dt.restaurant_id);
  formdata.append('menu_id',dt.menu_id);
  formdata.append('sec_name',dt.sec_name);
  formdata.append('sec_img',file);
  formdata.append('id',dt.id > 0 ? dt.id :0);
  formdata.append('filename',filename)
  return this.http.post(url_set.api_url+'/section',formdata);
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
get_special(v:any,d1:any){
  var v1 = d1 > 0 ? d1 : '';
  return this.http.get(url_set.api_url+'/notice?id='+v + '&menu_id=' +v1);
}
post_special(dt:any){
  return this.http.post(url_set.api_url+'/notice',dt);
}
getrestaurant_check_menu_setup(v:any){
  return this.http.get(url_set.api_url+ '/check_menu_setup?id='+v);
}
get_admin_dashboard(){
  return this.http.get(url_set.api_url+'/res_dtls?id=')
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
// get_menu_by_time(dt:any){
//   return this.http.get(url_set.api_url+'/preview_menu?id='+ dt.id + '&st_time=' + dt.st_time + '&end_time=' + dt.end_time);
// }
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

// update_logo_service(id:any,name:any,url:any,img_file:any){
//   const formdata=new FormData();
//   formdata.append('restaurant_id',id);
//   formdata.append('restaurant_name',name);
//   formdata.append('logo',url)
//   formdata.append('logo_img',img_file)
//   return this.http.post(url_set.api_url+'/logo',formdata)
// }

update_logo_service(id:any,name:any,url:any,img_file:any,filename:any){
  const formdata=new FormData();
  formdata.append('restaurant_id',id);
  formdata.append('restaurant_name',name);
  formdata.append('logo',url)
  formdata.append('logo_img',img_file);
  formdata.append('filename',filename);
  return this.http.post(url_set.api_url+'/logo',formdata)
}

update_cover_service(menuid:any,vmenu:any,name:any,restaurantid:any,coverfile:any,url:any,filename:any){
  const formdata=new FormData();
  formdata.append('id',menuid);
  formdata.append('menu_id',vmenu)
  formdata.append('restaurant_id',restaurantid);
  formdata.append('restaurant_name',name);
  formdata.append('cov_url',url)
  formdata.append('cov_img',coverfile);
  formdata.append('filename',filename)
  return this.http.post(url_set.api_url+'/cover_save',formdata)
 }
// update_cover_service(menuid:any,vmenu:any,name:any,restaurantid:any,coverfile:any,url:any){
//  const formdata=new FormData();
//  formdata.append('id',menuid);
//  formdata.append('menu_id',vmenu)
//  formdata.append('restaurant_id',restaurantid);
//  formdata.append('restaurant_name',name);
//  formdata.append('cov_url',url)
//  formdata.append('cov_img',coverfile)
//  return this.http.post(url_set.api_url+'/cover_save',formdata)
// }

update_top_service(menuid:any,vmenu:any,name:any,restaurantid:any,topfile:any,url:any,filename:any){
  const formdata=new FormData();
 formdata.append('id',menuid);
 formdata.append('menu_id',vmenu)
 formdata.append('restaurant_id',restaurantid);
 formdata.append('restaurant_name',name);
 formdata.append('top_url',url)
 formdata.append('top_img',topfile);
 formdata.append('filename',filename)
 return this.http.post(url_set.api_url+'/top_save',formdata)
}
// update_top_service(menuid:any,vmenu:any,name:any,restaurantid:any,topfile:any,url:any){
//   const formdata=new FormData();
//  formdata.append('id',menuid);
//  formdata.append('menu_id',vmenu)
//  formdata.append('restaurant_id',restaurantid);
//  formdata.append('restaurant_name',name);
//  formdata.append('top_url',url)
//  formdata.append('top_img',topfile)
//  return this.http.post(url_set.api_url+'/top_save',formdata)
// }

//For check whether the setup mode is on or not?
checkactivity(v:any){
  return this.http.get(url_set.api_url+'/check_activity?id='+v)

}
get_menu_by_time(dt:any){
  return this.http.get(url_set.api_url+'/preview_menu?id='+ dt.id + '&st_time=' + dt.st_time + '&end_time=' + dt.end_time+'&menu_id='+dt.menu_id);
}

check_menu_overlap(dt:any){
  return this.http.get(url_set.api_url+'/check_menu?id='+ dt.id + '&st_time=' + dt.st_time + '&end_time=' + dt.end_time+'&menu_id='+dt.menu_id);

}
get_menu(v:any){
  return this.http.get(url_set.api_url+'/menu_data?id='+ v);

}

// For deleting Menu pdf permanently 
delete_file(e:any,e1:any){
  const formdata=new FormData();
  formdata.append('res_id',e);
  formdata.append('id',e1);
  return this.http.get(url_set.api_url+'/del_menu?id=' + e1 + '&res_id=' + e)
}
// For deleting section pdf permanently 
delete_file_section(e:any,e1:any){
  const formdata=new FormData();
  formdata.append('res_id',e);
  formdata.append('id',e1);
  return this.http.get(url_set.api_url+'/del_sec?id=' + e1 + '&res_id=' + e)
}
//For Retriving data in order page
get_selectedd_order(dt:any){
  return this.http.get(url_set.api_url+'/order_dtls?id=' +dt);
}

pay_email(res_id:any,encode_data:any){
  // const formdata=new FormData();
  // formdata.append('restaurant_id',res_id);
  // formdata.append('en_dt',encode_data);
  return this.http.get(url_set.api_url+'/pay_email?id=' +res_id +'&en_dt=' +encode_data);
}
downloadsection(restid:any,menuid:any){
  console.log(restid+" "+menuid)
  return this.http.get(url_set.api_url+'/download_section?id='+restid+'&menu_id='+menuid,{responseType:'arraybuffer'})
}
downloadlogotopcover(restid:any){
  return this.http.get(url_set.api_url+'/download_cov?id='+restid,{responseType:'arraybuffer'})

}

//For getting Category Id
get_category_list(){
  return this.http.get(url_set.api_url+'/category_list');
}
get_promo_category_list(){
  return this.http.get(url_set.api_url+'/get_promo_cat_dtls');

}

// get_category_list() {
//   return this.http.get(url_set.api_url + '/category_list')
// }
uploadStockImage(id: any, file: any, filename: any) {
  const formdata = new FormData();
  formdata.append('stock_img', file);
  formdata.append('stock_filename', filename);
  formdata.append('cat_id', id);
  return this.http.post(url_set.api_url + "/stock_img", formdata);

}
getStockImages(v: any) {
  return this.http.get(url_set.api_url + "/stock_img?cat_id=" + v);

}
deleteStockImages(v: any) {
  return this.http.get(url_set.api_url + '/del_stock_img?id=' + v)
}

submit_special_data(v:any){
  return this.http.post(url_set.api_url+'/special_date_time',v);
}
//Check whether the package is exist or not
check_package_exist(v:any,v2:any){
  return this.http.get(url_set.api_url+'/check_menu_special?id='+v +'&menu_id='+v2);
}
//getting selected stock image 
get_stock_iamge(v:any,v2:any){
  return this.http.get(url_set.api_url+'/get_special_data?id='+v +'&menu_id='+v2);
}
// For gettimg time for checked package
get_date_time(dt:any){
 return  this.http.post(url_set.api_url+'/special_start_end',dt);
}
get_sp_desc(v1:any,v2:any){
  return this.http.get(url_set.api_url+'/get_special_data?id='+v1+'&menu_id='+v2)
}
 post_sp_desc(v:any){ 
  return this.http.post(url_set.api_url+'/get_special_data',v)
 } 

 //getting selected stock image 
// get_stock_iamge(v:any,v2:any){
//   return this.http.get(url_set.api_url+'/get_special_data?id='+v +'&menu_id='+v2);
// }


//For Getting special Image
// getspecial_image(cat_id:any){
//   var id = cat_id ? cat_id : '';
//   return this.http.get(url_set.api_url+'/stock_img?cat_id=' +id);
// }
//For Getting special Image
getspecial_image(cat_id:any){
  var id = cat_id ? cat_id : '';
  return this.http.get(url_set.api_url+'/stock_img?cat_id=' +id);
}
//For Getting promo Image
getpromo_image(cat_id:any){
  var id = cat_id ? cat_id : '';
  return this.http.get(url_set.api_url+'/promo_stock_img?cat_id=' +id);
}
//For checking payment is done or not
checkpayment(res_id:any){
  return this.http.get(url_set.api_url+'/pay_check?id='+res_id)
}

Check_active_status(res_id:any){
  return this.http.get(url_set.api_url+'/check_active_status?id='+res_id)
}
get_overlap_with_special(v:any){
  return this.http.get(url_set.api_url+'/check_special_overlap?id='+v)
}

//Check whether the restaurant select the event/Calendar or not
check_calender(res_id:any){
  return this.http.get(url_set.api_url+'/check_calender?id='+res_id);
}
//For getting the events in Calendar 
calender_dtls(res_id:any, flag:any){
  return this.http.get(url_set.api_url+'/calender_dtls?id='+res_id+'&flag='+flag);
}
//Posting events
post_calender_dtls(dt:any,img:any){
  const formdata=new FormData();
  formdata.append('img',img)
  formdata.append('event_name',dt.event_name);
  formdata.append('event_date',dt.event_date);
  formdata.append('event_time',dt.event_time);
  formdata.append('event_title',dt.event_title);
  formdata.append('tkt_url',dt.tkt_url);
  formdata.append('description',dt.description);
  formdata.append('res_id',dt.res_id);
  formdata.append('user',dt.user);
  formdata.append('id',dt.id);
  formdata.append('approval_flag',dt.approval_flag);
  formdata.append('user_type',dt.user_type)
  return this.http.post(url_set.api_url+'/calender_dtls',formdata);
}

get_event_dashboard(){
  return this.http.get(url_set.api_url + '/get_res_dtls?id=')
}

//Get data from admin promotions
 get_admin_promotion(){
   return this.http.get(url_set.api_url +'/adm_promo_dt');
 }
 //Get restaurant promotion data
 get_restaurant_promotion(res_id:any){
  return this.http.get(url_set.api_url +'/res_promo_dt?id=' +res_id);
}
//Posting promotion introduction
post_promo_intro(dt:any){
 return this.http.post(url_set.api_url +'/intro_save',dt);
}
//Posting promotion confirmation mail
post_promo_conf(dt:any){
  return this.http.post(url_set.api_url +'/conf_email_save',dt);
 }
//posting promotion popup
 post_promo_popup(dt:any){
  return this.http.post(url_set.api_url +'/pop_save',dt);
 }
//posting promotion questions
 post_promo_qn(dt:any){
   return this.http.post(url_set.api_url +'/qn_save',dt)
 }
 //posting promotion questions
 post_promo_email(dt:any){
  return this.http.post(url_set.api_url +'/mailing_email_save',dt)
}
post_promo_img(dt:any){
  return this.http.post(url_set.api_url +'/img_save',dt)

}
post_promo_status(dt:any){
  return this.http.post(url_set.api_url +'/status_save',dt)
}
//For Getting Customer database data
Get_promotion_dt(res_id:any){
  console.log(res_id);
  
  return this.http.get(url_set.api_url +'/get_promotion_dt?id='+res_id)
}
post_promo_dt(dt:any){
  return this.http.post(url_set.api_url+'/promo_save',dt)
}
get_admin_promo(){
  return this.http.get(url_set.api_url+'/adm_promo_dt')
}
post_promo_mail(dt:any){
  return this.http.post(url_set.api_url+'/mailing_email_save',dt)
}

get_prormo_dt(res_id:any,frm_date:any,to_date:any){
  return this.http.get(url_set.api_url+'/get_promo_dt?id='+res_id+'&frm_dt='+frm_date+'&to_dt='+to_date)
}

//Unlimited Menu
post_createmenu(dt:any){
  return this.http.post(url_set.api_url+'/add_menu',dt);
}
//Unlimited Menu
get_createmenu(res_id:any){
  return this.http.get(url_set.api_url+'/add_menu?res_id='+res_id);
}
delete_menu(id:any){
  return this.http.get(url_set.api_url+'/delete_menu?id=' +id);
}
afterlogin_update_packege(dt:any){
  return this.http.post(url_set.api_url+'/update_pack',dt);
}
afterlogin_update_window(dt:any){
  return this.http.post(url_set.api_url+'/update_prod',dt);
}
additional_payment(res_id:any){
  var dt={
    "res_id":res_id}
  return this.http.post(url_set.api_url+'/update_pay',dt)
}
//posting restaurant details
post_res_details(dt:any){
  return this.http.post(url_set.api_url+'/update_user',dt)
}
//posting password
post_change_password(dt:any){
  return this.http.post(url_set.api_url+'/update_password',dt)
}
//getting restaurant details
get_res_details(res_id:any){
  return this.http.get(url_set.api_url+'/res_details?res_id='+res_id)
}
//getting password
get_password(res_id:any){
  return this.http.get(url_set.api_url+'/get_pass?res_id=',res_id)
}
delete_section_serv(v:any){
  return this.http.get(url_set.api_url+'/delete_sec?id='+v)
}
delete_item_serv(v:any){
  return this.http.get(url_set.api_url+'/delete_item?id='+v)
}
delete_price_desc(v:any){
  return this.http.get(url_set.api_url+'/delete_price_desc?id='+v)
}

approve_calendar(dt:any){
  return this.http.post(url_set.api_url+'/approve_cal',dt)
}



}
