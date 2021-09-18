import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-logosetup',
  templateUrl: './logosetup.component.html',
  styleUrls: ['./logosetup.component.css']
})
export class LogosetupComponent implements OnInit {

  constructor(private router:Router,private Logo:DataserviceService) { }
  logo:any;
  resid=10;
  ngOnInit(): void {
  }
  goto_MenuDatapage(e:any){
    console.log(e,this.logo,this.resid);
     
   this.Logo.logosubmit(e,this.logo,this.resid).subscribe((data:any)=>{
     console.log(data);
     if(data.suc==1){
      this.router.navigate(['/menudata'])
     }
     else{
       
     }
   })
    //  this.router.navigate(['/menudata'])
  }
  selectimage(event:any){
   this.logo=event.target.files[0];
 }
}
