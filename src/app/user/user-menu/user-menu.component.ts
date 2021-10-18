import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { url } from 'inspector';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
// import { AnySoaRecord } from 'dns';

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
  sp_menuid: any;
  sp_posid: any;
  sp_back: any;
  sp_font: any;
  sp_notice: any;
  sp_head: any;
  greet:any;
  constructor(private activatedRoute:ActivatedRoute,private admin_data:LagunaserviceService) { }
  rest_name:any;
  rest_id:any;
  modalopen:any;
  modalopen1:any;
  modalopen2:any;
  t:any;
  start:any;
  arrayk1:any=[];
  end:any;
  rid:any;
  arrayMenu:any=[];
  myArr:any=[];
  menuData:any=[];
  sec_array:any=[];
  item_array:any=[];
  item_array1=[];
  menu_id:any;
  c=1;
  modal4:any;
  emptymenu:any;
  arrayK:any=[];
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
  specialData:any=[];
  spdescData:any;
  spdesc_text_readonly=''
  stockImg1:any;
  cat_name:any;
  spstockImg:any;
  special_flag:any;
  menu_show='A';
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
    this.greet=this.menu_id==1?'Good Morning':(this.menu_id==2?'Good Afternoon':'Good Evening')
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
  this.overlap=false;
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
      // this.spdescData=this.spdescData.msg
      this.spdesc_text_readonly=this.spdescData.menu_desc;
      this.stockImg1=this.spdescData.img_path;
      this.cat_name=this.spdescData.cat_name
      this.spstockImg=url_set.api_url+'/stock/'+ this.spdescData.img_path;
      console.log(this.overlapData);
      
      if(this.overlapData.length == 1){
        this.overlap=false;

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
        this.cov=this.menuImages.cov_img? this.url1+'/'+this.menuImages.cov_img : '';
        console.log(this.cov)
        if(this.menuImages.length < 1)
         {
          this.emptymenu=true;
         
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
    // this.secData.length=0;
    // this.menuImages.length=0;
    this.greet=menuid==1?'Good Morning':(menuid==2?'Good Afternoon':'Good Evening')

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
}
