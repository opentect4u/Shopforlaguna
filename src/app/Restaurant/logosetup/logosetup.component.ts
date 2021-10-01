import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Observable, Observer } from 'rxjs';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../service/dataservice.service';



@Component({
  selector: 'app-logosetup',
  templateUrl: './logosetup.component.html',
  styleUrls: ['./logosetup.component.css']
})
export class LogosetupComponent implements OnInit {
  // url_reg='https://shoplocal-lagunabeach.com/';
  // url_reg='https://localhost:4200/';
  url_reg=url_set.Api_url+'/';

  constructor(private toastr:ToastrManager,private router:Router,private Logo:DataserviceService,private lagunaserve:LagunaserviceService) { }
  name:any=localStorage.getItem('Restaurant_name');
  base64Image: any;
  logo:any;
  clearvalue:any;
  log:any=[];
  log_url:any='';
  value_logo_url=true;
  x:any;
  check:any=[];
  break_button:boolean=false;
  logo_preview:boolean=true;
  img_logo:any;
  img_showing=url_set.api_url;
  // resid=10;
  currentInput:any;
  resid:any=localStorage.getItem('Restaurant_id');

  ngOnInit(): void {



    console.log( this.value_logo_url);
    
    this.lagunaserve.get_menu_urls(this.resid).subscribe(data=>{
      console.log(data);
       this.log=data;
       if(this.log.logo_dt.length!=0){
     
       for(let i=0;i<this.log.logo_dt.length;i++){
          if(this.log.logo_dt[i].ogo_path!=''){
           this.logo_preview=false;
           this.img_logo=this.img_showing+'/'+this.log.logo_dt[i].logo_path;
           this.logo=this.img_showing+'/'+this.log.logo_dt[i].logo_path;
          //  this.logo_design=document.getElementById('myfile');
          //  this.logo_design.files='1 file';
          this.currentInput='1 file';
          //  console.log(this.logo_design);
         }
         if(this.log.logo_dt[i].logo_url!=null){
          
         this.logo=this.url_reg + this.log.logo_dt[i].logo_path; 
         this.log_url=this.log.logo_dt[i].logo_url;  
         this.value_logo_url=false;  
                 
         }
         else {
         this.value_logo_url=true;  
         this.log_url='';
         }
       }
 
         
      }


              //For Checking approval flag is on or not
this.lagunaserve.checkactivity(this.resid).subscribe(data=>{
  console.log(data);
  this.check=data;
  if(this.check.msg[0].approval_flag=='U'){
   
  }
  else{
   
    
    this.toastr.warningToastr('Set up mode is on , you can not update or insert','Alert!!',{
      dismiss:'click',
      maxShown:'1',
      toastTimeout:'5000'
    })

    this.break_button=true;
    this.value_logo_url=true;
    
  }
})
    })



  }
  goto_MenuDatapage(e:any){
    console.log(e,this.logo,this.resid);
    
   this.Logo.logosubmit(e,this.logo,this.resid,this.name).subscribe((data:any)=>{
     console.log(data);
     if(data.suc==1){
      //  this.clearvalue=document.getElementById('url');
      //  this.clearvalue.value=''
     this.router.navigate(['/menudata']);
     }
     else{
          // this.myFunction();
     }
   })
     
  }
  selectimage(event:any){
   
   if(event.target.files.length!=0){
    this.logo=event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.img_logo = reader.result as string;
     }
    reader.readAsDataURL(this.logo)
    this.logo_preview=false;
   }
   else{
    this.logo_preview=true;
      
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
checkvalidity(event:any){
  if(event.target.value!=''){
    this.value_logo_url=false;
    this.log_url=event.target.value;
    
  }
  else{
    this.value_logo_url=true;
    
  }
}
deletephoto(e:any){
  this.logo_preview=true;
}
}
