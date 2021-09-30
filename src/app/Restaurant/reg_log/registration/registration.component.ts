import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // v = 'test';
  click:any;
  constructor(private _data:DataserviceService,private router:Router,public toastr: ToastrManager) { }
   regData:any;
   email_data:any;
   invalid_data=true;
   show_msg=false;
   exist_number=true;
   exist:any;
   suc_msg:any;
   countryData:any;
   counry:any=[];
   x:any
  ngOnInit(): void {
    // function for retrieving countries
    this._data.getCountries().subscribe(data=>{
      console.log(data);
      this.countryData=data;
      console.log(this.countryData.msg);
      this.counry=this.countryData.msg;
    })
  }
  // function for checking the existing email
  check_mail(e:any){
    // console.log(e.target.value);
    if(e.target.id=='em'){

    
    this._data.check_existing_email(e.target.value).subscribe(data=>{
      // console.log(data)
    this.email_data=data;
    if(this.email_data.suc==2)
     {
    console.log("sadasdaasdasd")

       this.invalid_data=true;
      this.toastr.errorToastr('This mail id is already in use', 'Sorry!',{
      position: 'top-center',
      toastTimeout: (10000)});
    }
    else if(this.email_data.suc==1)
     {
    console.log("sadasda")

       this.invalid_data=false;
      //  this.show_msg=false;
      }
    else
    {}
 
    })
  }
  else if(e.target.id=='tel'){
    this._data.getmobile(e.target.value).subscribe(data=>{
      console.log(data);
      this.exist=data;
      if(this.exist.suc==2){
        this.exist_number=true;
          this.suc_msg=this.exist.msg;
          this.toastr.errorToastr('This no. is already in use', 'Sorry!',{
            position: 'top-center',
            toastTimeout: (10000)});
       
      }
      else{
        this.exist_number=false;
      }
    })
  }
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

  preventNonNumericalInput(e:any){
    e = e || window.event;
    
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);

    if (!charStr.match(/^[0-9]+$/))
     { e.preventDefault();}

  }


}
