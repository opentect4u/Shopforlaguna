import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global_url_test } from '../global_url';

@Injectable({
  providedIn: 'root'
})
export class LagunaserviceService {
  Url=global_url_test.URL+'package';
  _Url=global_url_test.URL+'promo';
  __url=global_url_test.URL+'holder_cling';
  holder_Url=global_url_test.URL+'holder_cling';
  constructor(private http:HttpClient){ }
  postpackagedata(v:any){//For Package Api In Admin order setup Page 
    console.log(v);
       return this.http.post(this.Url,v)
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
}
