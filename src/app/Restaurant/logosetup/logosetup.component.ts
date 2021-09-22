import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-logosetup',
  templateUrl: './logosetup.component.html',
  styleUrls: ['./logosetup.component.css']
})
export class LogosetupComponent implements OnInit {

  constructor(private router:Router,private Logo:DataserviceService,private lagunaserve:LagunaserviceService) { }
  name:any=localStorage.getItem('Restaurant_name');
  logo:any;
  clearvalue:any;
  log:any=[];
  log_url:any;
  value_logo_url=true;
  x:any;
  // resid=10;
  resid:any=localStorage.getItem('Restaurant_id');

  ngOnInit(): void {
    this.lagunaserve.get_menu_urls(this.resid).subscribe(data=>{
      console.log(data);
       this.log=data;
       for(let i=0;i<this.log.msg.length;i++){
         if(this.log.msg[i].logo_url!=''){
         this.log_url=this.log.msg[i].logo_url;    
                 
         }
         else {
          this.log_url='';
         }
       }
     
    })
  }
  goto_MenuDatapage(e:any){
    console.log(e,this.logo,this.resid);
    
   this.Logo.logosubmit(e,this.logo,this.resid).subscribe((data:any)=>{
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
   this.logo=event.target.files[0];
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
  }
  else{
    this.value_logo_url=true;
    
  }
}
}
