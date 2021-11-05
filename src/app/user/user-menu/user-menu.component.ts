import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { url } from 'inspector';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
// import { AnySoaRecord } from 'dns';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { NgxSpinnerService } from "ngx-spinner";
import { AngularEditorConfig } from '@kolkov/angular-editor';


export interface event{
  title: string;
  date: any;
  Time: any;
  headliner:any,
  tkt_url:any,
  description:any,
  imageUrl:any;
  allDay:boolean
  event_title:any;
  backgroundColor:any
}
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css',
'../../../assets/dynemicmenu/css/font-awesome.css',
'../../../assets/dynemicmenu/css/apps.css',
'../../../assets/dynemicmenu/css/apps_inner.css',
'../../../assets/dynemicmenu/css/res.css',



]
})
export class UserMenuComponent implements OnInit {
  config1: AngularEditorConfig = {
    editable: false,
    spellcheck: false,
    enableToolbar:false,
    showToolbar:false,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl:'',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  sp_menuid: any;
  u_event_name:any;
  u_event_date:any;
  u_event_time:any;
  u_event_url:any;
  
  u_event_email:any;
  show_anim=true;
  sp_posid: any;
  sp_back: any;
  sp_font: any;
  sp_notice: any;
  sp_head: any;
  promoq1:any;
  promoq2:any;
  promoq3:any;
  greet:any;
  button_show=true
  promo_flag:any;
  promo_intro:any;
  promo_img:any;
  promo_q1:any;
  err_flag=0;
  userData:any;
  promo_q2:any;
  promo_q3:any;
  authdiv:any;
  promo_pop_title:any;
  promo_pop_body:any;
  fname:any;
  lname:any;
  email:any;
  bdate:any;
  adate:any;
  mobile:any;
  pq1val:any;
  pq2val:any;
  pq3val:any;
  constructor(private spinner:NgxSpinnerService,public toastr: ToastrManager,private activatedRoute:ActivatedRoute,private admin_data:LagunaserviceService) { 
    const name = Calendar.name;
  }
  rest_name:any;
  rest_id:any;
  modalopen:any;
  modalopen1:any;
  modalopen2:any;
  t:any;
  sp_only=false;
  start:any;
  arrayk1:any=[];
  end:any;
  rid:any;
  arrayMenu:any=[];
  openevent:any;
  myArr:any=[];
  menuData:any=[];
  sec_array:any=[];
  item_array:any=[];
  item_array1=[];
  cal_flag=2;
  menu_id:any;
  c=1;
  modal4:any;
  emptymenu:any;
  m='';
  arrayK:any=[];
  x:any;
  authdt='';
  secData:any;
  topimage:any;
  secData_mod:any;
  coverimage:any;
  url1=url_set.api_url
  menuImages:any;
  cov:any;
  keyData:any=[];
  overlapData:any;
  overlap:any;
  ueventData:any;
  specialData:any=[];
  spdescData:any;
  spdesc_text_readonly=''
  stockImg1:any;
  cat_name:any;
  spstockImg:any;
  special_flag:any;
  menu_show='A';
  geteve:any=[];
  img_prop:any;
  mod:any;
  moddo:any;
  title = 'myproject';
  start_date:any;
  inp:any
  event_name:any='';
  desc:any='';
  Url:any='';
  headliner:any='';
  today=new Date();
  time:any;
  Event:event[]=[

    // { title: 'event 1', start: '2021-09-22',end: '2021-09-30'},
    // { title: 'event 2', start: '2021-06-30',end:'2021-07-01' }
  ];
  calendarOptions!: CalendarOptions;
  ngOnInit(): void {
   
    this.rest_name=this.activatedRoute.snapshot.params['rname'];
    this.rest_id=this.activatedRoute.snapshot.params['rid'];
    // this.start=this.activatedRoute.snapshot.params['t1'];
    // this.end=this.activatedRoute.snapshot.params['t2'];
    // this.start=atob(this.start);
    // this.end=atob(this.end);
    // console.log(this.start+" "+this.end)

    this.rest_id=atob(this.rest_id);
    this.myArr=this.rest_id.split('/');
    this.rid=this.myArr[0];
    this.start=this.myArr[1];
    this.end=this.myArr[2];
    this.menu_id=this.myArr[3];
    this.special_flag = this.menu_id != 5 ? 'N' : 'Y';
    console.log(this.menu_id);
    
    this.greet=this.menu_id==1?1:(this.menu_id==2?2:(this.menu_id==5 ? 5 : 3))
   console.log(this.greet);
   
    this.admin_data.calender_dtls(this.rid,this.cal_flag).subscribe(data=>{
      // console.log(data);
      console.log(data);
      this.geteve=data;
      for(let i=0;i<this.geteve.msg.length;i++){
       this.Event= this.Event.concat({
             title:'',
             event_title:this.geteve.msg[i].event_name,
             date:this.geteve.msg[i].event_date,
             Time:this.geteve.msg[i].event_time,
             headliner:this.geteve.msg[i].event_title,
             tkt_url:this.geteve.msg[i].tkt_url,
             description:this.geteve.msg[i].description,
         imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
         backgroundColor:this.geteve.msg[i].approval_flag=='N'?'#c768b7':'#188038',
            
             allDay:true
           })
      }
    })
        setInterval(()=>{
       this.calendarOptions= {
            weekends:true,
            eventDurationEditable:true,
            eventStartEditable:true,
            eventDisplay:'list-item',
            aspectRatio: 3.25,
            initialView: 'dayGridMonth',
            displayEventTime:false,
            dayMaxEventRows: true, // for all non-TimeGrid views
            views: {
            timeGrid: {
            dayMaxEventRows: 1// adjust to 6 only for timeGridWeek/timeGridDay
            }
            },
            
            validRange: {
              start: this.today,
            },
            headerToolbar: {
              start: 'prev,next today',
              center: 'title',
              end: 'dayGridMonth,dayGridWeek,dayGridDay'
            },
        
            eventClick:this.eventclick.bind(this),
            droppable:true,
            selectable: true,
            navLinks:true,
            editable: false,
        
            // nextDayThreshold: '00:00:00',
            plugins: [ interactionPlugin, dayGridPlugin ],
        
            dateClick: this.handleDateClick.bind(this),
            events:this.Event,
            height:700
        };
        },500)







    // this.greet=this.menu_id==1?'Good Morning':(this.menu_id==2?'Good Afternoon':'Good Evening')
    console.log(this.menu_id)
    this.admin_data.get_sp_desc(this.rid,this.menu_id).subscribe(data=>{console.log(data)
    
      this.spdescData=data;
      this.spdescData=this.spdescData.msg
      this.spdesc_text_readonly=this.spdescData[0].menu_desc;
      this.stockImg1=this.spdescData[0].img_path;
      this.cat_name=this.spdescData[0].cat_name
      this.spstockImg=url_set.api_url+'/stock/'+ this.spdescData[0].img_path;
      // this.imgcat=this.spdescData[0].img_catg
      console.log(this.spstockImg);
    })
  

    this.admin_data.get_special(this.rid, this.menu_id).subscribe(data=>{console.log(data)
      this.specialData=data;
      this.specialData=this.specialData.msg;
      this.sp_menuid=this.specialData[0].menu_id;
      this.sp_posid=this.specialData[0].position_id;
      this.sp_back=this.specialData[0].back_color;
      this.sp_font=this.specialData[0].font_color;
      this.sp_head=this.specialData[0].header_title;
      this.sp_notice=this.specialData[0].notice_content;
      })
    var dt={
      "id":this.rid,
      "st_time":this.start,
      "end_time":this.end,
      "menu_id":this.menu_id
    }
if(this.start){
    this.admin_data.check_menu_overlap(dt).subscribe(data=>{console.log(data)
    this.overlapData=data
    this.overlapData=this.overlapData.msg
    console.log(this.overlapData.length)
    
    if(this.menu_id != 5)
    {if(this.overlapData.length==1)
    {
      this.overlap=false;
      this.admin_data.get_menu_urls(this.rid, this.menu_id).subscribe(data=>{console.log(data)
        this.menuImages=data;
        this.menuImages=this.menuImages.oth_dt;
        for(let i=0;i<this.menuImages.length;i++)
        {
          if(this.menuImages[i].menu_id==this.menu_id)
          {
            this.topimage=this.menuImages[i].top_image_img? this.url1+'/'+this.menuImages[i].top_image_img : ''
            this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
            console.log(this.cov)
            console.log(this.menuImages[i].cover_page_img)
          }
        }
     }
     
     )
    this.admin_data.get_section_data(this.rid,this.menu_id).subscribe(data=>{console.log(data)
    this.secData=data;
    this.secData=this.secData.msg;
    
   
   })
     console.log(this.rid+" "+this.start+" "+this.end)
     var dt={
       "id":this.rid,
       "st_time":this.start,
       "end_time":this.end,
       "menu_id":this.menu_id
     }

     this.admin_data.get_menu_by_time(dt).subscribe(data=>{console.log(data)
     this.menuData=data;
     this.promo_intro=this.menuData.promo_dt.intro;
     this.promo_img=url_set.api_url+'/stock/'+this.menuData.promo_dt.image;
     this.promo_pop_title=this.menuData.promo_dt.pop_up_offer_title;
     this.promo_pop_body=this.menuData.promo_dt.pop_up_offer_body;
     this.promo_flag=this.menuData.promo_flag;
     this.promo_q1=this.menuData.promo_dt.questions1;
     this.promo_q2=this.menuData.promo_dt.questions2;
     this.promo_q3=this.menuData.promo_dt.questions3;
      this.menuData=this.menuData.res;
      if(this.menuData.length < 1)
        this.emptymenu=true;
      else
        this.emptymenu=false;
       this.arrayMenu.push(this.menuData)
       // console.log(this.arrayMenu)
    //  console.log(this.menuData['AÇAÍ'])
 
     
 
 var dt = new Array();
     for(let i=0;i<this.secData.length;i++){
     if(this.menuData[this.secData[i].section_name] != undefined){
           dt[this.secData[i].section_name] = this.menuData[this.secData[i].section_name]
           this.arrayK[i]=dt[this.secData[i].section_name];
           this.arrayk1[i]=this.secData[i].section_name
     }   
      }
      console.log(dt);
      console.log(this.arrayK);
      console.log(this.arrayk1)
      for(let i=0;i<this.arrayK.length;i++){
      
          console.log(this.arrayK[i]);
        
      }
      let j = 0;
     //  dt = Object.keys(this.menuData).map((key) => {
     //   return {
     //    id: key,
     //    name: this.menuData[key]
     //   }
     //  })
      for (const [key, value] of Object.entries(this.menuData)) {
       // dt[key] = value;
        this.keyData.push({sec: key, itm: this.menuData[key].res, img: this.menuData[key].sec_img})
       // console.log(key, value);
     }
     console.log(this.keyData)
    
     //  this.arrayMenu.push(JSON.parse(this.keyData));
     //  console.log(this.arrayMenu)
     
     
     })
    }
    else if(this.overlapData.length>1)
   {
  this.overlap=true;
  this.admin_data.get_menu_urls(this.rid, this.menu_id).subscribe(data=>{console.log(data)
    this.menuImages=data;
    this.menuImages=this.menuImages.logo_dt;
    console.log(this.menuImages)
  
        this.topimage=this.url1+'/'+this.menuImages[0].logo_path
        console.log(this.topimage);
        // this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
        // console.log(this.cov)
        // console.log(this.menuImages[i].cover_page_img)
      
    
 }
 
 )
  this.open_modal2()
   }
else{
  this.overlap=false;
  this.emptymenu=true;
  this.open_menu(this.menu_id,this.start,this.end)
}
} else{
  this.emptymenu=true;
  this.overlap=true;
  this.admin_data.get_overlap_with_special(this.rid).subscribe(data=>{console.log(data)
  this.overlapData=data;
  this.overlapData=this.overlapData.msg
  
  })
} 
    })
  }
  else{

    this.admin_data.get_menu(this.rid).subscribe(data=>{console.log(data)
      this.menuImages=data;
      this.greet=this.menuImages.greet;
      this.overlapData=this.menuImages.menu_check;
      this.menu_show=this.menuImages.menu_active_flag== 'Y' ? (this.menuImages.reg_menu_flag=='A'?'A':'E') : 'A';
      this.special_flag = this.menuImages.menu_active_flag== 'Y' ? 'Y' : 'N';
      this.spdescData=this.menuImages.sp_menu;
      this.promo_intro=this.menuImages.promo_dt.intro;
      this.promo_img=url_set.api_url+'/stock/'+this.menuImages.promo_dt.image;
      this.promo_pop_title=this.menuImages.promo_dt.pop_up_offer_title;
      this.promo_pop_body=this.menuImages.promo_dt.pop_up_offer_body;
      this.promo_flag=this.menuImages.promo_flag;
      this.promo_q1=this.menuImages.promo_dt.questions1;
      this.promo_q2=this.menuImages.promo_dt.questions2;
      this.promo_q3=this.menuImages.promo_dt.questions3;
      console.log(this.menu_show)
      if(this.menu_show=='E')
      {this.cov=undefined;}
      console.log(this.cov)
      // this.spdescData=this.spdescData.msg
      this.spdesc_text_readonly=this.spdescData.menu_desc;
      this.stockImg1=this.spdescData.img_path;
      this.cat_name=this.spdescData.cat_name
      this.spstockImg=url_set.api_url+'/stock/'+ this.spdescData.img_path;
      console.log(this.overlapData);
      
      if(this.overlapData.length == 1){
        this.overlap=false;
        if(this.menuImages.menu_check[0].menu_id==5)
          { this.sp_only=true;
            this.emptymenu=false;
            this.admin_data.get_menu_urls(this.rid, this.menu_id).subscribe(data=>{console.log(data)
              this.menuImages=data;
              this.menuImages=this.menuImages.logo_dt;
              console.log(this.menuImages)
            
                  this.topimage=this.url1+'/'+this.menuImages[0].logo_path
                  console.log(this.topimage);
                  // this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
                  // console.log(this.cov)
                  // console.log(this.menuImages[i].cover_page_img)
                
              
           }
           
           )
      
            // this.topimage=this.url1+'/'+this.menuImages.logo_path
            this.overlap=false;
        this.cov=this.menuImages.cov_img? this.url1+'/'+this.menuImages.cov_img : '';

        this.topimage=this.menuImages.top_img? this.url1+'/'+this.menuImages.top_img : ''

            console.log(this.sp_only)
            // this.cov='';
            console.log(this.cov) 
          }
        else
        {
this.sp_only=false;
        }
  
        this.admin_data.get_special(this.rid, this.overlapData[0].menu_id).subscribe(data=>{console.log(data)
          this.specialData=data;
          this.specialData=this.specialData.msg;
          this.sp_menuid=this.specialData[0].menu_id;
          this.sp_posid=this.specialData[0].position_id;
          this.sp_back=this.specialData[0].back_color;
          this.sp_font=this.specialData[0].font_color;
          this.sp_head=this.specialData[0].header_title;
          this.sp_notice=this.specialData[0].notice_content;
          })

        console.log(this.menuImages.cov_img);
        this.topimage=this.menuImages.top_img? this.url1+'/'+this.menuImages.top_img : ''
        console.log(this.topimage)
        if(this.menu_show=='E' && this.special_flag=='Y')
        this.cov=undefined;
        else
        this.cov=this.menuImages.cov_img? this.url1+'/'+this.menuImages.cov_img : undefined;
        console.log(this.cov)
        console.log(this.menuImages.res);
        
        if(Object.entries(this.menuImages.res).length === 0 && this.menuImages.res.constructor === Object)
         {
          this.emptymenu=false;
         
          console.log(this.topimage+" "+this.cov)
         } 
        else
          this.emptymenu=false;
          for (const [key, value] of Object.entries(this.menuImages.res)) {
            // dt[key] = value;
            this.keyData.push({sec: key, itm: this.menuImages.res[key].res, img: this.menuImages.res[key].sec_img})
            // console.log(key, value);
          }
          console.log(this.keyData)
      }else if(this.overlapData.length > 1){
        this.overlap=true;
        this.admin_data.get_menu_urls(this.rid, null).subscribe(data=>{console.log(data)
          this.menuImages=data;
          this.menuImages=this.menuImages.logo_dt;
          console.log(this.menuImages)
        
              this.topimage=this.url1+'/'+this.menuImages[0].logo_path
              console.log(this.topimage);
              // this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
              // console.log(this.cov)
              // console.log(this.menuImages[i].cover_page_img)
            
          
       }
       
       )
        this.open_modal2();
      }
      else
      {this.emptymenu=true;
        this.overlap=false;
      this.topimage=this.menuImages.top_img? this.url1+'/'+this.menuImages.top_img : ''
        this.cov=this.menuImages.cov_img? this.url1+'/'+this.menuImages.cov_img : undefined;
        // this.topimage=this.url1+'/'+this.menuImages[0].logo_path
        this.admin_data.get_menu_urls(this.rid, this.menu_id).subscribe(data=>{console.log(data)
          this.menuImages=data;
          this.menuImages=this.menuImages.logo_dt;
          console.log(this.menuImages)
        
              this.topimage=this.url1+'/'+this.menuImages[0].logo_path
              console.log(this.topimage);
              // this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
              // console.log(this.cov)
              // console.log(this.menuImages[i].cover_page_img)
            
          
       })
        // this.cov=undefined;
      }
    })
  }
//     this.admin_data.get_menu_urls(this.rid).subscribe(data=>{console.log(data)
//        this.menuImages=data;
//        this.menuImages=this.menuImages.oth_dt;
//        for(let i=0;i<this.menuImages.length;i++)
//        {
//          if(this.menuImages[i].menu_id==this.menu_id)
//          {
//            this.topimage=this.menuImages[i].top_image_img? this.url1+'/'+this.menuImages[i].top_image_img : ''
//            this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
//          }
//        }
//     }
    
//     )
//    this.admin_data.get_section_data(this.rid,this.menu_id).subscribe(data=>{console.log(data)
//    this.secData=data;
//    this.secData=this.secData.msg;
   
  
//   })
//     console.log(this.rid+" "+this.start+" "+this.end)
//     var dt={
//       "id":this.rid,
//       "st_time":this.start,
//       "end_time":this.end
//     }

//     this.admin_data.get_menu_by_time(dt).subscribe(data=>{console.log(data)
//     this.menuData=data;
//      this.menuData=this.menuData.res;
//      if(Object.entries(this.menuData).length === 0 && this.menuData.constructor === Object)
//        this.emptymenu=true;
//      else
//        this.emptymenu=false;
//       this.arrayMenu.push(this.menuData)
//       // console.log(this.arrayMenu)
//     console.log(this.menuData['AÇAÍ'])

    

// var dt = new Array();
//     for(let i=0;i<this.secData.length;i++){
//     if(this.menuData[this.secData[i].section_name] != undefined){
//           dt[this.secData[i].section_name] = this.menuData[this.secData[i].section_name]
//           this.arrayK[i]=dt[this.secData[i].section_name];
//           this.arrayk1[i]=this.secData[i].section_name
//     }   
//      }
//      console.log(dt);
//      console.log(this.arrayK);
//      console.log(this.arrayk1)
//      for(let i=0;i<this.arrayK.length;i++){
     
//          console.log(this.arrayK[i]);
       
//      }
//      let j = 0;
//     //  dt = Object.keys(this.menuData).map((key) => {
//     //   return {
//     //    id: key,
//     //    name: this.menuData[key]
//     //   }
//     //  })
//      for (const [key, value] of Object.entries(this.menuData)) {
//       // dt[key] = value;
//        this.keyData.push({sec: key, itm: this.menuData[key].res, img: this.menuData[key].sec_img})
//       // console.log(key, value);
//     }
//     console.log(this.keyData)
   
//     //  this.arrayMenu.push(JSON.parse(this.keyData));
//     //  console.log(this.arrayMenu)
    
    
//     })
  }
  open_modal(){
    this.modalopen=document.getElementById('id01')
    this.modalopen.style.display='block'
    if(this.overlap==true)
    this.overlap=true;
  }
  modalclose(){
    this.modalopen.style.display='none'
    if(this.overlap==true)
    this.overlap=true;
    console.log(this.overlap)
    // location.reload()

  }
  open_modal1(){
    this.modalopen1=document.getElementById('id02')
    this.modalopen1.style.display='block'
    // if(this.overlap==true)
    // this.overlap=true;
  }
  modalclose1(){
    this.modalopen1.style.display='none'
    // if(this.overlap=true)
    // this.overlap=true;
  }
  open_modal2(){
    // this.overlap=true;
    console.log(this.overlap)
    this.modalopen2=document.getElementById('id03')
    this.modalopen2.style.display='block'
   
  }
  modalclose2(){
    this.modalopen2.style.display='none'
    this.overlap=true;
    console.log(this.overlap)
    // this.ngOnInit();
  }
  open_menu(menuid:any,st:any,end:any){
    console.log(menuid);
    
    // this.secData.length=0;
    // this.menuImages.length=0;
    this.greet=menuid==1?1:(menuid==2?2:(menuid==5 ? 5 : 3))
console.log(this.greet);

    this.admin_data.get_special(this.rid, menuid).subscribe(data=>{console.log(data)
      this.specialData=data;
      this.specialData=this.specialData.msg;
      this.sp_menuid=this.specialData[0].menu_id;
      this.sp_posid=this.specialData[0].position_id;
      this.sp_back=this.specialData[0].back_color;
      this.sp_font=this.specialData[0].font_color;
      this.sp_head=this.specialData[0].header_title;
      this.sp_notice=this.specialData[0].notice_content;
      })
    if(this.overlap==true)
    this.overlap=true;
    this.keyData.length=0;
    this.arrayk1.length=0;
    this.arrayK.length=0;
    console.log(menuid+" "+st+" "+end)
  
    this.admin_data.get_menu_urls(this.rid, menuid).subscribe(data=>{console.log(data)
      this.menuImages=data;
      this.menuImages=this.menuImages.oth_dt;
      let i=0;
      // for(let i=0;i<this.menuImages.length;i++)
      // {
      if(this.menu_id){
      //   if(this.menuImages[i].menu_id==this.menu_id)
      //   {
          this.topimage=this.menuImages[i].top_image_img? this.url1+'/'+this.menuImages[i].top_image_img : ''
          this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
          console.log(this.cov);
      //   }
      }
      else{
        if(this.menuImages[i].menu_id==menuid)
        {
          this.topimage=this.menuImages[i].top_image_img? this.url1+'/'+this.menuImages[i].top_image_img : ''
          this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
        }
      }
        
      }
  //  }
   
   )
  this.admin_data.get_section_data(this.rid,menuid).subscribe(data=>{console.log(data)
  this.secData=data;
  this.secData=this.secData.msg;
  
 
 })
   console.log(this.rid+" "+this.start+" "+this.end)
   var dt={
     "id":this.rid,
     "st_time":st,
     "end_time":end,
     "menu_id":menuid
   }

   this.admin_data.get_menu_by_time(dt).subscribe(data=>{console.log(data)
   this.menuData=data;
    this.menuData=this.menuData.res;
    if(this.menuData.length < 1)
      this.emptymenu=true;
    else
      this.emptymenu=false;
     this.arrayMenu.push(this.menuData)
     // console.log(this.arrayMenu)
  //  console.log(this.menuData['AÇAÍ'])

   

var dt = new Array();
   for(let i=0;i<this.secData.length;i++){
   if(this.menuData[this.secData[i].section_name] != undefined){
         dt[this.secData[i].section_name] = this.menuData[this.secData[i].section_name]
         this.arrayK[i]=dt[this.secData[i].section_name];
         this.arrayk1[i]=this.secData[i].section_name
   }   
    }
    console.log(dt);
    console.log(this.arrayK);
    console.log(this.arrayk1)
    for(let i=0;i<this.arrayK.length;i++){
    
        console.log(this.arrayK[i]);
      
    }
    let j = 0;
   //  dt = Object.keys(this.menuData).map((key) => {
   //   return {
   //    id: key,
   //    name: this.menuData[key]
   //   }
   //  })
    for (const [key, value] of Object.entries(this.menuData)) {
     // dt[key] = value;
      this.keyData.push({sec: key, itm: this.menuData[key].res, img: this.menuData[key].sec_img})
     // console.log(key, value);
   }
   console.log(this.keyData)
  
   //  this.arrayMenu.push(JSON.parse(this.keyData));
   //  console.log(this.arrayMenu)
  if(this.emptymenu==false) 
   this.open_modal();
   })

  }
openmodal4(){
  this.modal4=document.getElementById('id04');
  this.modal4.style.display='block'
}
closemodal4(){
  this.modal4=document.getElementById('id04');
  this.modal4.style.display='none'
}
open_calendar(){
  this.openevent=document.getElementById('id05');
  this.openevent.style.display='block'
}
closemodal5(){
  this.openevent=document.getElementById('id05');
  this.openevent.style.display='none'
}
eventclick(arg:any) {
  console.log(arg);
  this.mod=document.getElementById('modalbutton');
  this.mod.click();
  // this.event_name=arg.event._def.title;
  this.event_name=arg.event._def.extendedProps.event_title;
  console.log(this.event_name);
  this.start_date=arg.event.startStr;
  // this.mod=document.getElementById('date');
  // this.mod.value=arg.event.startStr;
  console.log(arg.event.startStr);
  this.headliner=arg.event._def.extendedProps.headliner;
  this.Url=arg.event._def.extendedProps.tkt_url;
  this.desc=arg.event._def.extendedProps.description;
  //  this.mod=document.getElementById('time');
  //  this.mod.value=arg.event._def.extendedProps.Time;
  this.img_prop = document.getElementById('imgeve');
  this.img_prop.src= arg.event._def.extendedProps.imageUrl != '' ? url_set.api_url+'/'+arg.event._def.extendedProps.imageUrl : '/assets/images/eventCalender.jpg'
  this.time=arg.event._def.extendedProps.Time;
  console.log(this.img_prop);
  
 }
 handleDateClick(arg:any) {

  console.log('date click! ' +arg);
   this.start_date=arg.dateStr;
  this.mod=document.getElementById('modalbutton');
   this.mod.click();
  
   
}
openmodal6(){
  this.openevent=document.getElementById('id06');
  this.openevent.style.display='block'
}
openuserevent(){
  this.openevent=document.getElementById('usereventmodal');
  this.openevent.style.display='block'
}
closemodal7(){
  this.openevent=document.getElementById('usereventmodal');
  this.openevent.style.display='none'
}
closemodal6(){
  this.openevent=document.getElementById('id06');
  this.openevent.style.display='none'
}
auth_click(){
  // alert("hello")
 this.authdiv=document.getElementById('auth');

 if(this.authdiv.checked)
  this.button_show=false;
else
  this.button_show=true;
}
myFunction() {
  this.x = document.getElementById("snackbar");
  this.x.className = "show";
  setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
}
submit_promo_data(){
  // alert('Hello')
  this.err_flag=0
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  this.fname=document.getElementById('fn')
  this.lname=document.getElementById('ln')
  this.email=document.getElementById('em')
  this.mobile=document.getElementById('mb')
  this.bdate=document.getElementById('bdate');
  this.adate=document.getElementById('adate')
  this.authdiv=document.getElementById('auth');
  if(this.authdiv.checked)
  this.authdt='Y'
  else
  this.authdt='N'
  if(this.fname.value==''){
    this.err_flag=1;
    this.m="First Name is mandatory"
    this.toastr.errorToastr(this.m, 'Alert!',{position:'top-center',animate:'slideFromTop'})
    


  }
  else if(this.lname.value==''){
    this.err_flag=1;
    this.m="Last Name is mandatory"
    this.toastr.errorToastr(this.m, 'Alert!',{position:'top-center',animate:'slideFromTop'})

  }
  else if(this.email.value==''){
    this.err_flag=1;
    this.m="Email is mandatory"
    this.toastr.errorToastr(this.m, 'Alert!',{position:'top-center',animate:'slideFromTop'})


  }
  else if(!this.email.value.match(mailformat)){
    this.err_flag=1;
    this.m="The email you've provided isn't valid"
    this.toastr.errorToastr(this.m, 'Alert!',{position:'top-center',animate:'slideFromTop'})
  }
else if(!this.bdate.value&&!this.adate.value){
    this.err_flag=1;
    this.m="You need to provide atleast one date"
    this.toastr.errorToastr(this.m, 'Alert!',{position:'top-center',animate:'slideFromTop'})

  }

  else
  this.err_flag=0
  

  if(this.promo_q1)
  {this.pq1val=document.getElementById('p_q1')
  this.promoq1=this.pq1val.value}
  else
  this.promoq1=''
  if(this.promo_q2)
  {
    this.pq2val=document.getElementById('p_q2')
    this.promoq2=this.pq2val.value
  }
  else
  this.promoq2=''
  if(this.promo_q3)
  {this.pq3val=document.getElementById('p_q3')
  this.promoq3=this.pq3val.value;}
  else
  this.pq3val=''
  
 
 
  if(this.err_flag==0)
  {

    this.spinner.show();
  //   // alert("inside submit")
  //   console.log("First Name:"+this.fname.value)
  // console.log("Last Name:"+this.lname.value)
  // console.log("Email:"+this.email.value)
  // console.log("Question1:"+this.pq1val.value)
  // console.log("Question2:"+this.pq2val.value)
  // console.log("Question3:"+this.pq3val.value)
  // console.log("Mobile:"+this.mobile.value)
  // console.log("Birthday:"+this.bdate.value)
  // console.log("Anniversary:"+this.adate.value)
  var dt={
    "res_id":this.rid,
    "f_name":this.fname.value,
    "l_name":this.lname.value,
    "birth_dt":this.bdate.value,
    "anni_dt":this.adate.value,
    "auth":this.authdt,
    "mob_no":this.mobile.value,
    "q_1":this.promoq1,
    "q_2":this.promoq2,
    "q_3":this.promoq3,
    "user":this.email.value,
    "email":this.email.value
  }
  this.admin_data.post_promo_dt(dt).subscribe(data=>{console.log(data)
    this.userData=data;
    if(this.userData.suc==1){
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
      setTimeout(() => {
        this.m="Now that we have your date(s), we'll celebrate together! Let's have fun!"
        this.toastr.successToastr(this.m, 'Way to go,'+' '+this.fname.value+'!!',{position:'top-center',animate:'slideFromTop'})
        this.reset_userform();
        this.show_anim=false;
        setTimeout(() => {
          this.show_anim=true;
        }, 5000);
      }, 3000);
  
  }
    else{
      this.spinner.hide();

      this.m="There was a problem while saving your data"
      this.toastr.errorToastr(this.m, 'Oops!!',{position:'top-center',animate:'slideFromTop'})
    }
  },error=>{
    this.spinner.hide();

    this.m="There was a problem while saving your data"
      this.toastr.errorToastr(this.m, 'Oops!!',{position:'top-center',animate:'slideFromTop'})
  })
}

}
reset_userform(){
  this.fname=document.getElementById('fn')
  this.lname=document.getElementById('ln')
  this.email=document.getElementById('em')
  this.mobile=document.getElementById('mb')
  this.bdate=document.getElementById('bdate');
  this.adate=document.getElementById('adate')
  this.authdiv=document.getElementById('auth');
  this.pq1val=document.getElementById('p_q1');
  this.pq2val=document.getElementById('p_q2');
  this.pq3val=document.getElementById('p_q3')
  if(this.promo_q1)
  this.pq1val.value='';
  if(this.promo_q2)
  this.pq2val.value=''; 
  if(this.promo_q3)
  this.pq3val.value='';

  this.fname.value='';
  this.lname.value='';
  this.email.value='';
  this.mobile.value='';
  this.adate.value='';
  this.bdate.value='';
  this.authdiv.checked=false;
}
submit_user_event(){
  this.u_event_name=document.getElementById('en')
  this.u_event_date=document.getElementById('edt')
  this.u_event_email=document.getElementById('uem')
  this.u_event_url=document.getElementById('uurl')
  this.u_event_time=document.getElementById('etm')
  var dt={
    "event_name":this.u_event_name.value,
    "event_date":this.u_event_date.value,
    "event_time":this.u_event_time.value,
    "event_title":'',
    "tkt_url":this.u_event_url.value,
    "description":'',
    "res_id":this.rid,
    "user":this.u_event_email.value,
    "id": 0,
    "user_type":'U',
    "approval_flag":'N'
    
  }
  this.admin_data.post_calender_dtls(dt,null).subscribe(data=>{console.log(data)
  this.ueventData=data;
  if(this.ueventData.suc==1)
    {this.m="Your request has been submitted!" 
    this.myFunction()
  
  }
  else
  {
    this.m="Failure while submitting" 
    this.myFunction()
  }
  },error=>{
    this.m="Failure while submitting" 
    this.myFunction()
  })

}
}




























