import { Component, OnInit } from '@angular/core';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-restaurant-setup',
  templateUrl: './restaurant-setup.component.html',
  styleUrls: ['./restaurant-setup.component.css',
  '../../../assets/appcss.css'
]
})
export class RestaurantSetupComponent implements OnInit {
  storevalue: any=[];
  specialData:any;
  menufordesc: any;
  back: any;
  value_font:boolean=false;
   value_background=true;
  value_Headertitle= true;
  menu_place: any;
  constructor(private admin_data:LagunaserviceService) { }
 show_tab='tab1'
 pos:any;
 get_section_for_item:any;
 tab_el:any;
 logo_img:any;
 idata:any;
 i_data:any;
 break_cov:any;
 break_top:any;
 lunch_cov:any;
 lunch_top:any;
 brunch_cov:any;
 brunch_top:any;
 dinner_cov:any;
 dinner_top:any;
 menuData:any;
 starttime:any;
 endtime:any;
 itemData:any;
 sectionitem:any;
 secData:any;
 bkmenuid:any;
 datetimeData:any;
 daycheck:any;
 k:any;
 spData:any;
 sec_post_data:any;
 m='';
 itemdesc:any;
 m_id='';
 menuid:any;
 aboutusData1:any;
 aboutusData:any;
 about_text_readonly:any;
 x:any;
 get_section_for_item1:any
 menu_item:any;
 sid:any;
 sp_menuid:any;
 sp_posid:any;
 sp_back:any;
 sp_font:any;
 sp_head:any;
 sp_notice:any;
  ngOnInit(): void {
    this.admin_data.get_special(13).subscribe(data=>{
      console.log(data)
    this.specialData=data;
    this.specialData=this.specialData.msg;
    this.sp_menuid=this.specialData[0].menu_id;
    this.sp_posid=this.specialData[0].position_id;
    this.sp_back=this.specialData[0].back_color;
    this.sp_font=this.specialData[0].font_color;
    this.sp_head=this.specialData[0].header_title;
    this.sp_notice=this.specialData[0].notice_content;
    })
    this.admin_data.get_about_us(13).subscribe(data=>{console.log(data)
    this.aboutusData=data;
      this.about_text_readonly=this.aboutusData.msg[0].about_us;
    })
    this.bkmenuid=document.getElementById('bkmenu1');
    this.bkmenuid.checked=true;
    this.admin_data.get_sec_url(1,13).subscribe(data=>{console.log(data)
      this.secData=data;
      this.secData=this.secData.msg;
    })
    this.tab_el=document.getElementById('defaultOpen');
    this.tab_el.style.background='#3F51B5'
    this.tab_el.style.color="white";
   this.admin_data.get_menu_urls(13).subscribe((data)=>{console.log(data)
   this.menuData=data;
   this.logo_img=this.menuData.msg[0].logo_url;
  this.menuData=this.menuData.msg;
  })
  }
  send_about_us(v:any){
    if(v!='')
   this.admin_data.post_about_us(v,13).subscribe(data=>{console.log(data)
    this.aboutusData1=data;
    if(this.aboutusData1.suc==1)
    {this.m="Updation Successful";
    this.myFunction();
    this.admin_data.get_about_us(13).subscribe(data=>{console.log(data)
      this.aboutusData=data;
        this.about_text_readonly=this.aboutusData.msg[0].about_us;
      })
  }
    else{
      this.m="Failed to update"
      this.myFunction();
    }
  },error=>{
    this.m="Failed to update"
    this.myFunction();

  })
  }
  store_menu(v:any){
    this.m_id=v;
    //alert(v);
  }
  create_section(v:any){
    console.log(this.m_id+" "+v);
    var dt={
      "restaurant_id" : 5,
    "menu_id":this.m_id,
    "sec_name":v
    }
    this.admin_data.post_section_create(dt).subscribe(data=>{console.log(data)
    this.sec_post_data=data;
    if(this.sec_post_data.suc==1)
    {
      this.m="Updation Successful";
    this.myFunction();
    }
    else{
      this.m="Failed to update"
      this.myFunction();
    }
    },error=>{
      this.m="Failed to update"
      this.myFunction();
  
    })
  }
  select_section_with_menu(v:any){
    this.menu_item=v;
    this.admin_data.get_section_data(13,v).subscribe(data=>{console.log(data)
    this.get_section_for_item=data;
    this.get_section_for_item=this.get_section_for_item.msg;
    
    })
  }
  get_section_item(v:any){
   this.sectionitem=v;
  }
  send_item(v:any){
    console.log(this.menu_item+" "+this.sectionitem+" "+v)
    var dt={
      "restaurant_id" : 5,
      "menu_id":this.menu_item,
      "sec_id":this.sectionitem,
      "item_name":v
      // "break_check" : 'Y',
      // "month_day": [{"dt":mon},{"dt":tue},{"dt":wed},{"dt":thur},{"dt":fri},{"dt":sat},{"dt":sun}],
      // "start_time" : st,
      // "end_time" : end
    }
    this.admin_data.post_item_data(dt).subscribe(data=>{console.log(data)
    this.itemData=data;
    if(this.itemData.suc==1){
      this.m="Updation Successful";
      this.myFunction();
    }
    else{
      this.m="Failed to update"
      this.myFunction();
    }
    },error=>{
      this.m="Failed to update"
      this.myFunction();
  
    })
  }
  select_for_desc_menu(v:any){
    this.menufordesc=v;
    this.admin_data.get_section_data(13,v).subscribe(data=>{console.log(data)
      this.get_section_for_item1=data;
      this.get_section_for_item1=this.get_section_for_item1.msg;
      
      })
  }
  get_item_select(v:any){
    this.sid=v;
    this.admin_data.get_item_data(13,this.menufordesc,this.sid).subscribe(data=>{console.log(data)
    this.idata=data;
    this.idata=this.idata.msg;
    })
  }
  get_item_select1(v:any){
    this.i_data=v;

  }
  submit_price_desc(p:any,d:any,a:any)
  {
    console.log(this.sid+" "+this.menufordesc+" "+this.i_data)
    var dt={
      "restaurant_id" : 5,
      "menu_id":this.menufordesc,
      "sec_id": this.sid,
      "item_id": this.i_data,
      "item_price" : p,
      "item_desc" : d,
      "item_note" : a
    }
    this.admin_data.post_item_data_desc(dt).subscribe(data=>{console.log(data)
     this.itemdesc=data;
     if(this.itemdesc.suc==1){
     this.m="Updation Successful";
     this.myFunction();
   }
   else{
     this.m="Failed to update"
     this.myFunction();
   }
    },error=>{
      this.m="Failed to update"
     this.myFunction();
    })
  }
submitup(mon:any,tue:any,wed:any,thur:any,fri:any,sat:any,sun:any,st:any,end:any){
  this.storevalue.length=0;
  this.storevalue.push({
    "restaurant_id" : 5,
    "menu_id":this.menuid,
    "break_check" : 'Y',
    "month_day": [{"dt":mon},{"dt":tue},{"dt":wed},{"dt":thur},{"dt":fri},{"dt":sat},{"dt":sun}],
    "start_time" : st,
    "end_time" : end

  })
  this.admin_data.post_date_time(this.storevalue).subscribe(data=>{console.log(data)
  
  })
}
checkbrucnhday(e:any,day:any){
  if(day=='everyday'){

  }
  else if(day=='monday'){

  }
  else if(day=='tuesday'){

  }
  else if(day=='wednesday'){

  }
  else if(day=='thursday'){

  }
  else if(day=='friday'){

  }
  else if(day=='saturday'){

  }
  else if(day=='sunday'){

  }
}
pickup_place(v:any){
  this.menu_place=v
}
getposition(e:any){
  this.pos=e
}
submit_special(m:any,p:any,h:any,c1:any,c2:any,notice:any){
  this.menu_place=m;
  this.pos=p;
  var dt = {
    "menu":this.menu_place,notice_flag: 'Y', position: this.pos,headertitle:h,fontcolor:c1,back_color:c2,notice:notice,restaurant_id:5};
    this.admin_data.post_special(dt).subscribe(data=>{console.log(data)
      this.spData=data;
      if(this.spData.suc==1){
        this.m="Updation successful"
        this.myFunction()
      }
      else{
        this.m="Failed to update"
        this.myFunction()
      }
    },error=>{this.m="Failed to update"
    this.myFunction()})
}
  myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  //retrieve date and time for set date and time tab
  menu_set_date_time(v:any){
    this.menuid=v;
    // alert(v);
    for(this.k=1;this.k<=7;this.k++)
    {
      this.daycheck=document.getElementById(this.k);
      this.daycheck.checked=false;
    }
    this.admin_data.get_set_time(v,13).subscribe(data=>{console.log(data)
    this.datetimeData=data;
    this.starttime=this.datetimeData.msg[0].start_time;
    this.endtime=this.datetimeData.msg[0].end_time;
    this.datetimeData=this.datetimeData.msg;

    for(let i=0;i<this.datetimeData.length;i++)
    {
      this.daycheck=document.getElementById(this.datetimeData[i].month_day);
      this.daycheck.checked=true;

    }
    
    })
  }
  //retrieve section image
  get_sec_img(v:any){
  //  alert(v);
  this.admin_data.get_sec_url(v,13).subscribe(data=>{console.log(data)
    this.secData=data;
    this.secData=this.secData.msg;
  })
  }
  //opening respective tabs
  openCity(v:any){
    if(v=='tab1'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      

    }
    if(v=='tab2'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      

    }
    if(v=='tab3'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      

    }
    if(v=='tab33'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      

    }
    if(v=='tab4'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      

    }
    if(v=='tab5'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      

    }
    if(v=='tab6'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      

    }
    
    if(v=='tab7'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      

    }
    if(v=='tab8'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      

    }
    if(v=='tab9'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      

    }
    if(v=='tab10'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen10');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      

    }
   this.show_tab=v;
   
  }

  checkvalidity(event:any){
    console.log(event)
    if(event.target.id=='headTitle'){
      if(event.target.value!=''){
        this.value_Headertitle=false;
        }
        else{
        this.value_Headertitle=true;
          
        }
    }}
    changecolor(event:any,e:any){
      if(e=='back'){
      this.back=document.getElementById('box');
      this.back.value=event.target.value;
      this.value_font=false;
      }
      else if(e=='font'
      ){
       this.back=document.getElementById('box2');
       this.back.value=event.target.value;
       this.value_background=false;
      }
      console.log(event.target.value);
 }
}