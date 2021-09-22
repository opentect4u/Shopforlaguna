import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant-setup',
  templateUrl: './restaurant-setup.component.html',
  styleUrls: ['./restaurant-setup.component.css',
  '../../../assets/appcss.css'
]
})
export class RestaurantSetupComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['id','section_name','edit'];
  displayedColumns1: string[] = ['id','item_name','edit'];
  displayedColumns2: string[] = ['id','item_desc','item_price','item_note','edit'];
 
  // dataSource = ELEMENT_DATA;
  userData:any;
  dataSource= new MatTableDataSource();
  dataSource1= new MatTableDataSource();
  dataSource2= new MatTableDataSource();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  storevalue: any=[];
  specialData:any;
  menufordesc: any;
  back: any;
  value_font: boolean=false;
   value_background=true;
  value_Headertitle= true;
  menu_place: any;
  constructor(private admin_data:LagunaserviceService,private activatedRoute:ActivatedRoute) { }
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
 mid2:any;
 sectionitem:any;
 secData:any;
 bkmenuid:any;
 datetimeData:any;
 daycheck:any;
 k:any;
 mid1:any;
 z:any;
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
 r_id:any;
 secid:any;
 dashboardData:any;
 rest_nm:any;
 rest_contact:any;
 rest_phone:any;
 rest_em:any;
 rest_web:any;
 rest_add:any;
 rest_monthly:any;
 rest_setup:any;
 sec_value='';
 eid2:any;
 sid2:any;
 i_value='';
 submit_show2=false;
 descriptionData:any;
 submit_show=false;
 iid:any;
  ngOnInit(): void {
    // this.daycheck=document.getElementById('1');
    //   this.daycheck.checked=true;
    this.r_id=this.activatedRoute.snapshot.params['id'];
    this.r_id=atob(this.r_id);
    console.log(this.r_id);
    this.fetchdata();
    this.fetchdata1();
    this.fetchdata2();
    this.admin_data.get_specific_admin_dashboard(this.r_id).subscribe(data=>{console.log(data)
    this.dashboardData=data;
    this.dashboardData=this.dashboardData.msg;
    this.rest_nm=this.dashboardData[0].restaurant_name;
    this.rest_contact=this.dashboardData[0].contact_name;
    this.rest_phone=this.dashboardData[0].phone_no;
    this.rest_em=this.dashboardData[0].email;
    this.rest_web=this.dashboardData[0].website;
    this.rest_monthly=this.dashboardData[0].monthly_fee;
    this.rest_setup=this.dashboardData[0].setup_fee;

    this.rest_add=this.dashboardData[0].addr_line1+" "+this.dashboardData[0].addr_line2+" "+this.dashboardData[0].zip+" "+this.dashboardData[0].city+", "+this.dashboardData[0].country
    })
    this.admin_data.get_special(this.r_id).subscribe(data=>{console.log(data)
    this.specialData=data;
    this.specialData=this.specialData.msg;
    this.sp_menuid=this.specialData[0].menu_id;
    this.sp_posid=this.specialData[0].position_id;
    this.sp_back=this.specialData[0].back_color;
    this.sp_font=this.specialData[0].font_color;
    this.sp_head=this.specialData[0].header_title;
    this.sp_notice=this.specialData[0].notice_content;
    })
    this.admin_data.get_about_us(this.r_id).subscribe(data=>{console.log(data)
    this.aboutusData=data;
      this.about_text_readonly=this.aboutusData.msg[0].about_us;
    })
    
    this.bkmenuid=document.getElementById('bkmenu1');
    this.bkmenuid.checked=true;
    this.admin_data.get_sec_url(1,this.r_id).subscribe(data=>{console.log(data)
      this.secData=data;
      this.secData=this.secData.msg;
    })
    this.tab_el=document.getElementById('defaultOpen');
    this.tab_el.style.background='#3F51B5'
    this.tab_el.style.color="white";
   this.admin_data.get_menu_urls(this.r_id).subscribe((data)=>{console.log(data)
   this.menuData=data;
   this.logo_img=this.menuData.msg[0].logo_url;
  this.menuData=this.menuData.msg;
  })
  }
  fetchdata(){
    
    this.admin_data.get_section_data(this.r_id,'').subscribe(data=>{console.log(data)
      this.get_section_for_item=data;
      this.get_section_for_item=this.get_section_for_item.msg;
      this.putdata(this.get_section_for_item);
      })
  }
  putdata(v:any){
    this.dataSource= new MatTableDataSource(v);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  putdata2(v:any){
    this.dataSource2= new MatTableDataSource(v);
    this.dataSource2.paginator=this.paginator;
    this.dataSource2.sort=this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  send_about_us(v:any){
    if(v!='')
   this.admin_data.post_about_us(v,this.r_id).subscribe(data=>{console.log(data)
    this.aboutusData1=data;
    if(this.aboutusData1.suc==1)
    {this.m="Updation Successful";
    this.myFunction();
    this.admin_data.get_about_us(this.r_id).subscribe(data=>{console.log(data)
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
  get_sec_id(mid:any,v:any,v1:any){
    this.secid=v;
    console.log(mid);
    this.mid1=mid;
    this.z=document.getElementById('b'+mid)
    this.z.checked=true;
    console.log(this.z)
    this.submit_show=true;
    this.sec_value=v1;
    console.log("menu_id="+mid+" section_id="+this.secid+" section_name="+this.sec_value+" res_id="+this.r_id)
    // alert(v)
  }
  update_section(v:any){
    this.sec_value=v;
    this.submit_show=false;
    // console.log("menu_id="+this.mid1+" section_id="+this.secid+" section_name="+this.sec_value+" res_id="+this.r_id)
    console.log(this.m_id+" "+v);
    var dt={
      "restaurant_id" : this.r_id,
    "menu_id":this.mid1,
    "sec_name":this.sec_value,
    "id":this.secid
    }
    this.admin_data.post_section_create(dt).subscribe(data=>{console.log(data)
    this.sec_post_data=data;
    if(this.sec_post_data.suc==1)
    {
      this.m="Updation Successful";
    this.myFunction();
    this.fetchdata()
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
  update_add_item(m:any,e:any,s:any,k:any){
    this.mid2=m;
    this.eid2=e;
    this.sid2=s;
    this.iid=k;
    this.i_value=s
    console.log(this.eid2)
    this.submit_show2=true;

  }
  store_menu(v:any){
    this.m_id=v;
    alert("store "+v)
    //alert(v);
    // this.fetchdata(v)
  }
  create_section(v:any){
    console.log(this.m_id+" "+v);
    var dt={
      "restaurant_id" : this.r_id,
    "menu_id":this.m_id,
    "sec_name":v
    }
    this.admin_data.post_section_create(dt).subscribe(data=>{console.log(data)
    this.sec_post_data=data;
    if(this.sec_post_data.suc==1)
    {
      this.m="Updation Successful";
    this.myFunction();
    this.fetchdata()
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
    this.admin_data.get_section_data(this.r_id,v).subscribe(data=>{console.log(data)
    this.get_section_for_item=data;
    this.get_section_for_item=this.get_section_for_item.msg;
    
    })
  }
  update_send_item(v:any){
    // this.mid2=m;
    // this.eid2=e;
    // this.sid2=s;
    // this.i_value=s
    this.submit_show2=false;
    console.log(this.mid2+" "+this.eid2+" "+this.i_value+" "+this.iid)
    var dt={
      "restaurant_id" : this.r_id,
      "menu_id":this.mid2,
      "sec_id":this.eid2,
      "item_name":v,
      "id":this.iid
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
      this.fetchdata1();
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
  get_section_item(v:any){
   this.sectionitem=v;
   console.log(this.r_id+" "+this.menufordesc+" "+this.sid)
  
  }

  fetchdata1(){
    this.admin_data.get_item_data(this.r_id,'','').subscribe(data=>{console.log(data)
      this.idata=data;
      this.idata=this.idata.msg;
      this.putdata1(this.idata);
      })
  }
  send_item(v:any){
    console.log(this.menu_item+" "+this.sectionitem+" "+v)
    var dt={
      "restaurant_id" : this.r_id,
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
    this.admin_data.get_section_data(this.r_id,v).subscribe(data=>{console.log(data)
      this.get_section_for_item1=data;
      this.get_section_for_item1=this.get_section_for_item1.msg;
      
      })
  }
  get_item_select(v:any){
    
    this.sid=v;
    this.admin_data.get_item_data(this.r_id,this.menufordesc,this.sid).subscribe(data=>{console.log(data)
    this.idata=data;
    this.idata=this.idata.msg;
    
    })
  }
  putdata1(v:any){
    this.dataSource1= new MatTableDataSource(v);
    this.dataSource1.paginator=this.paginator;
    this.dataSource1.sort=this.sort;
  }
  get_item_select1(v:any){
    this.i_data=v;

  }
  submit_price_desc(p:any,d:any,a:any)
  {
    console.log(this.sid+" "+this.menufordesc+" "+this.i_data)
    var dt={
      "restaurant_id" : this.r_id,
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
  fetchdata2(){
    this.admin_data.get_item_data_desc(this.r_id).subscribe((data:any)=>{console.log(data)
      this.descriptionData=data;
      this.descriptionData=this.descriptionData.msg
    this.putdata2(this.descriptionData)
    
    })
  }
submitup(mon:any,tue:any,wed:any,thur:any,fri:any,sat:any,sun:any,st:any,end:any){
  this.storevalue.length=0;
  this.storevalue.push({
    "restaurant_id" : this.r_id,
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
    "menu":this.menu_place,notice_flag: 'Y', position: this.pos,headertitle:h,fontcolor:c1,back_color:c2,notice:notice,restaurant_id:this.r_id};
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
    this.admin_data.get_set_time(v,this.r_id).subscribe(data=>{console.log(data)
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
  this.admin_data.get_sec_url(v,this.r_id).subscribe(data=>{console.log(data)
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
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}