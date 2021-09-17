import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // v = 'test';
  constructor(private _data:DataserviceService,private router:Router) { }
   regData:any;
   email_data:any;
   invalid_data=true;
   show_msg=false;
   countryData:any;
   x:any
  ngOnInit(): void {
    // function for retrieving countries
    this._data.getCountries().subscribe(data=>{
      // console.log(data);
      this.countryData=data;
    })
  }
  // function for checking the existing email
  check_mail(e:any){
    // console.log(e.target.value);
    this._data.check_existing_email(e.target.value).subscribe(data=>{
      // console.log(data)
    this.email_data=data;
    if(this.email_data.suc==2)
     {this.invalid_data=true;this.show_msg=true;}
    else if(this.email_data.suc==1)
     {this.invalid_data=false;this.show_msg=false;}
    else
    {}
    
    })
  }
  // function for sending registration data
  regSubmit(v:any){
   
    // console.log(v);
    this._data.submit_reg(v).subscribe((dt) => {
      console.log(dt);
      this.regData=JSON.parse(dt);
      if(this.regData.suc==1)
       this.router.navigate(['/order',this.regData.id])
      else
        this.myFunction()
    },error=>{this.myFunction});
    
    // console.log(v);
  // alert(this.v);
    
}
// function for showing a snackbar whenever registration fails
myFunction() {
  // Get the snackbar DIV
  this.x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  this.x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
} 
}
