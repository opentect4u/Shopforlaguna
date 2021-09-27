import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../service/dataservice.service';



@Component({
  selector: 'app-logosetup',
  templateUrl: './logosetup.component.html',
  styleUrls: ['./logosetup.component.css']
})
export class LogosetupComponent implements OnInit {
  url_reg='https://shoplocal-lagunabeach.com/';
  constructor(private router:Router,private Logo:DataserviceService,private lagunaserve:LagunaserviceService) { }
  name:any=localStorage.getItem('Restaurant_name');
  base64Image: any;
  logo:any;
  clearvalue:any;
  log:any=[];
  log_url:any='';
  value_logo_url=true;
  x:any;
  // resid=10;
  resid:any=localStorage.getItem('Restaurant_id');

  ngOnInit(): void {
    console.log( this.value_logo_url);
    
    this.lagunaserve.get_menu_urls(this.resid).subscribe(data=>{
      console.log(data);
       this.log=data;
       if(this.log.logo_dt.length!=0){
     
       for(let i=0;i<this.log.logo_dt.length;i++){
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
    console.log( this.value_logo_url);
         
      }
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
    this.log_url=event.target.value;
    
  }
  else{
    this.value_logo_url=true;
    
  }
}
// downloadImage(){
//   this.lagunaserve.get_menu_urls(this.resid).subscribe(data=>{
//     console.log(data);
//      this.log=data;
//      if(this.log.logo_dt.length!=0){
   
//      for(let i=0;i<this.log.logo_dt.length;i++){
  
//          console.log("afasfdsf")
//       console.log(this.logo, this.log.logo_dt[i].logo_path);

//        this.logo=this.url_reg + this.log.logo_dt[i].logo_path; 
//        this.getBase64ImageFromURL(this.logo).subscribe((base64data:any) => {
//         console.log(base64data);
//         this.base64Image = "data:image/jpg;base64," + base64data;})
//         // save image to disk
//         var link = document.createElement("a");
  
//         document.body.appendChild(link); // for Firefox
  
//         link.setAttribute("href", this.base64Image);
//         link.setAttribute("download", "mrHankey.jpg");
//         link.click();
//       // });
//       //  this.base64Image = "data:image/jpg;base64,"+ this.logo
      
      
//       var link = document.createElement("a");
//       document.body.appendChild(link); // for Firefox

//       link.setAttribute("href", this.logo);
//       link.setAttribute("download", "mrHankey.jpg");
//       link.click(); 
               
   
      
//      }

       
//     }
//   })
// }

// public getBase64ImageFromURL(url: any) {
//   return Observable.create((observer: Observer<string>) => {
//     const img: HTMLImageElement = new Image();
//     img.crossOrigin = "Anonymous";
//     img.src = url;
//     if (!img.complete) {
//       img.onload = () => {
//         observer.next(this.getBase64Image(img));
//         observer.complete();
//       };
//       img.onerror = err => {
//         observer.error(err);
//       };
//     } else {
//       observer.next(this.getBase64Image(img));
//       observer.complete();
//     }
//   });
// }

// getBase64Image(img: HTMLImageElement) {
//   const canvas: HTMLCanvasElement = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;
//   var  ctx: CanvasRenderingContext2D = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);
//   const dataURL: string = canvas.toDataURL("image/png");

//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }
}
