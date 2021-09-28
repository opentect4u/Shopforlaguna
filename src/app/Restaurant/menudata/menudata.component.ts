import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-menudata',
  templateUrl: './menudata.component.html',
  styleUrls: ['./menudata.component.css']
})
export class MenudataComponent implements OnInit, AfterViewInit{
  name:any=localStorage.getItem('Restaurant_name');
  notice_check:any;
  v:any=0;
  abut=false;
    not=true;
  position_id:any;
  header_title:any;
  notice_content:any;
  font_color:any;
  back_color:any;
  role:any=0;
  menu_id:any;
  val:any="";
  notic:any=[];
  abou:any=[];
  val_about:any;
  maxChars=150;
  disabld:boolean=false;
  tab1:boolean=false;
  tab2:boolean=true;
  counter:any=0;
  aboutus:any;
  value_menu:boolean=true;
  value_position:boolean=true;
  value_Headertitle:boolean=true;
  value_font=true;
  value_background=true;
 value_text=true;
 color_font=true;
  
  valid_aboutus:any;
  disabled_about:boolean=true;;
  notice:any
  t1:any;
  x :any;
  t2:any;
  // res_id:any=10;
  res_id:any=localStorage.getItem('Restaurant_id');

  success:any;
  clearall:any;
  menu:any;
  position:any;
  font:any;
  back:any;
  notice_flag:any;
  breakfast:boolean=true;
  launch:boolean=true;
  brunch:boolean=true;
  dinner:boolean=true;
  allmenus:boolean=true
  showinitialvalue:any=[]
  notice_select:any=[];
  notify:any;
  constructor(private router:Router,private about:DataserviceService,private lagunaserve:LagunaserviceService) { }
  ngAfterViewInit(): void {
    if('notice' in localStorage){
      this.abut=false;
      this.not=false;
      this.t1='notices';
   }
  }

  ngOnInit(): void {
   
    this.lagunaserve.get_menu_on_choice(this.res_id).subscribe(data=>{
      console.log(data);
      this.notice_select=data;
    
      this.notice_select=this.notice_select.msg;
      })    
    
   this.lagunaserve.get_special(this.res_id).subscribe(data=>{
     console.log(data);
     this.notic=data;
     this.notify=this.notic.msg[0].menu_id;
     for(let i=0;i<this.notic.msg.length;i++){
       if(this.notic.msg[i].notice_flag=='Y'){
         this.notice_check=document.getElementById('noticechecked');
         this.notice_check.checked=true;
         this.color_font=false;
         this.notice_flag='Y';
       }
       else {
        this.notice_check=document.getElementById('noticechecked');
        this.notice_check.checked=false;
        this.color_font=true;
        this.notice_flag='N';

       }
      
       this.position_id=this.notic.msg[i].position_id;
       this.position=this.position_id;
       if(this.position_id!=''){
         this.value_position=false;
       }
       else{
         this.value_position=true;
       }
       this.header_title=this.notic.msg[i].header_title;
       if( this.header_title!=''){
         this.value_Headertitle=false;
       }
       else{
         this.value_Headertitle=true;
       }
       this.notice_content=this.notic.msg[i].notice_content;
       if(this.notice_content!=''){
         this.value_text=false;
       }
       else{
        this.value_text=true;
         
       }
       this.font_color=this.notic.msg[i].font_color;
       if(this.font_color!=''){
        this.value_font=false;
       }
       else{
        this.value_font=true
         }
       this.back_color=this.notic.msg[i].back_color;
          if(this.back_color!=''){
            this.value_background=false;
          }
          else{
            this.value_background=true;
          
          }
     }
    
   })

     this.lagunaserve.get_about_us(this.res_id).subscribe(data=>{
       console.log(data);
       this.abou=data;
       for(let i=0;i<this.abou.msg.length;i++){
         if(this.abou.msg[i].about_us!=""){
         this.val=this.abou.msg[i].about_us;
         this.disabled_about=false;
          }
         else {
         this.val="";
         this.disabled_about=true;
         }
       }

     })

    
    this.aboutus=document.getElementById('defaultOpen');
    this.aboutus.style.background='#00477e';
    this.aboutus.style.color='white';
  }
  openCity(e:any){
    if(e=='aboutUs'){
        this.tab1=false;
        this.tab2=true;
        this.aboutus=document.getElementById('defaultOpen');
        this.aboutus.style.background='#00477e';
        this.aboutus.style.color='white';
        this.notice=document.getElementById('defaultOpen1');
        this.notice.style.background='#f1f1f1';
        this.notice.style.color='black';

    }
   else{
     if( this.t1=='notices'){
    //   this.lagunaserve.getrestaurant_check_menu_setup(this.res_id).subscribe(data=>{
    //     console.log(data);
    // })

    this.lagunaserve.get_menu_urls(this.res_id).subscribe(data=>{
      console.log(data);
      this.showinitialvalue=data;
      console.log(this.showinitialvalue.msg);
      if(this.showinitialvalue.msg.length!=0){
            for(let i=0;i<this.showinitialvalue.msg.length;i++){
              if(this.showinitialvalue.msg[i].menu_id==1){
                this.breakfast=false;
              }
              if(this.showinitialvalue.msg[i].menu_id==2){
                this.launch=false;
              }
            if(this.showinitialvalue.msg[i].menu_id==3){
                this.dinner=false
              }
            if(this.showinitialvalue.msg[i].menu_id==4){
                this.brunch=false;
              }
            }
            if(this.brunch==false && this.breakfast==false && this.launch==false && this.dinner==false){
              this.allmenus=false;
            }
      }
  })


    this.tab1=true;
    this.tab2=false;
    this.aboutus=document.getElementById('defaultOpen1');
    this.aboutus.style.background='#00477e';
    this.aboutus.style.color='white';
    this.notice=document.getElementById('defaultOpen');
    this.notice.style.background='#f1f1f1';
    this.notice.style.color='black';
     }
   }  
   
}
nexttab(e:any,e1:any){
   if(e=='notices'){
    this.v=1;
    this.abut=false;
       this.not=false;
    localStorage.setItem('notice',this.v);
      this.tab1=true;
      this.tab2=false;
      this.t1='notices';
       this.about.Aboutus(e1,this.res_id).subscribe(data=>{
         console.log(data);
         this.success=data;
         if(this.success.suc==1){
          this.myFunction();
         
      }
      else{

      }
       })

      
    }
    // For Change the color of active tab
     
   
    this.aboutus=document.getElementById('defaultOpen1');
    this.aboutus.style.background='#00477e';
    this.aboutus.style.color='white';
    this.notice=document.getElementById('defaultOpen');
    this.notice.style.background='#f1f1f1';
    this.notice.style.color='black';
    
}
nexttab1(e:any,v1:any,v2:any,v3:any,v4:any,v5:any,v6:any){
  if(e=='about'){
    this.abut=false;
    this.not=false;
    this.tab1=true;
    this.tab2=false;
    this.about.Notice(this.menu,this.position,v1,v3,v5,v6,this.res_id,this.notice_flag).subscribe(data=>{
        console.log(data);
        this.success=data
        if(this.success.suc==1){
            //  this.myFunction();
            this.router.navigate(['/thankyou'])

            }
            else{

            }
        
    })
  }
}
pickup_place(event:any){
 this.menu=event;
 console.log(this.menu)
 if(this.menu!=''){
   this.value_menu=false;
 }
 else{
  this.value_menu=true;

 }
 console.log(this.menu)
}
getposition(e:any){
 this.position=e;
 console.log(this.position)
 if(e!=''){
   this.value_position=false;
 }
 else{
  this.value_position=true;
 }

}
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

checknotice(event:any){
  if(event.target.checked){
    this.notice_flag='Y';
    this.color_font=false;
 
  }
  else
  {
  
    this.notice_flag='N';
    this.color_font=true;
  }

}
myFunction() {
  // Get the snackbar DIV
  this.x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  this.x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
} 
prevent_null(event:any){

  console.log(event.target.value);
  this.role=event.target.value.length;
  // console.log(event);

    if(event.target.id=='about'){
       
 
      if(this.val == ''){
        console.log("adsasda1")
        this.disabled_about=true;
      }
      
      else{
        console.log("adsasda")
        this.disabled_about=false;
      }
 
 
    }
else {
     this.disabld=true;
      
}
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
  }
  else if(event.target.id=='box'){
    if(event.target.value!=''){
      this.value_font=false;
      }
      else{
      this.value_font=true;
        
      }
  }
  else if(event.target.id=='box2'){
    if(event.target.value!=''){
      this.value_background=false;
      }
      else{
      this.value_background=true;
        
      }
  }
  else if(event.target.id=='spclMore'){
    if(event.target.value!=''){
      this.value_text=false;
      }
      else{
      this.value_text=true;
        
      }
  }
 
}

}
