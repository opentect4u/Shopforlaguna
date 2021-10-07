import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',

]
})
export class LoginComponent implements OnInit {
  v:any;
  message='';
  stor:any=[];
com:any=[];
comma:any;

   constructor(private _data:DataserviceService,private router:Router,private lagunaserve:LagunaserviceService) { }
  logData:any;
  x:any;
  confirm_modal:any;
  ngOnInit(): void {
    this.confirm_modal=document.getElementById('change_pass_modal');
    this.confirm_modal.style.display='none'
  }
  // function for sending the login credentials
  logSubmit(v:any){

    console.log(v);
    this._data.submit_log(v).subscribe(data=>{
      console.log(data);
      this.logData=data;
      if(this.logData.suc>0)
      {

          localStorage.setItem('Restaurant_id',this.logData.msg.restaurant_id);
           console.log(this.logData.msg.restaurant_id);

          localStorage.setItem('breakfast','active');
          localStorage.setItem('dinner','active');

          localStorage.setItem('launch','active');

          localStorage.setItem('brunch','active');

          localStorage.setItem('isloggedin','true');
          this.lagunaserve.getrestaurant_check_menu_setup(this.logData.msg.restaurant_id).subscribe(data=>{
            console.log(data);


            this.stor=data;

              localStorage.setItem('Menu',this.stor.msg[0].menu);
              localStorage.setItem('Restaurant_name',this.stor.msg[0].restaurant_name);
              localStorage.setItem('No_of_menu',this.stor.msg[0].menu_name);
              localStorage.setItem('Restaurant_email',this.stor.msg[0].email_id);
              if(this.stor.msg[0].menu!=null){
                this.comma=this.stor.msg[0].menu;
                this.com=this.comma.split(',');
                console.log(this.com.length);
                console.log(this.com);
              }
              else {
                this.com.length=0;
              }
              if(this.stor.msg[0].menu_name=='O'){
                if(this.com.length==1) {

                  this.v=1;
                  localStorage.setItem('value',this.v);
                  console.log(this.v,localStorage.getItem('value'));

                      for(let j=0;j<this.com.length;j++){
                          if(this.com[j]=="1"){

                            localStorage.setItem('breakfast','');

                          }
                          else if(this.com[j]=="2"){
                            localStorage.setItem('launch','');


                          }
                          else if(this.com[j]=="3"){
                            localStorage.setItem('dinner','');

                          }
                          else if(this.com[j]=="4"){
                            localStorage.setItem('brunch','');

                          }
                      }
                  }
                  else if(this.com.length==0){
                    this.v=0;
                    localStorage.setItem('value',this.v);

                  }
              }
              if(this.stor.msg[0].menu_name=='T'){

                 if(this.com.length==1) {

                  this.v=1;
                  localStorage.setItem('value',this.v);
                  console.log(this.v,localStorage.getItem('value'));

                      for(let j=0;j<this.com.length;j++){
                          if(this.com[j]=="1"){

                            localStorage.setItem('breakfast','');

                          }
                          else if(this.com[j]=="2"){
                            localStorage.setItem('launch','');


                          }
                          else if(this.com[j]=="3"){
                            localStorage.setItem('dinner','');

                          }
                          else if(this.com[j]=="4"){
                            localStorage.setItem('brunch','');

                          }
                      }
                  }
                  else if(this.com.length==0){
                    this.v=0;
                    localStorage.setItem('value',this.v);

                  }
                  else if(this.com.length==2){
                    this.v=2;
                    localStorage.setItem('value',this.v);
                      if(this.com[0]=="1" && this.com[1]=="2"){

                        localStorage.setItem('breakfast','');
                        localStorage.setItem('launch','');
                        localStorage.setItem('dinner','active');
                        localStorage.setItem('brunch','active');


                      }
                     if(this.com[0]=="1" && this.com[1]=="3"){
                      localStorage.setItem('breakfast','');
                      localStorage.setItem('launch','active');
                      localStorage.setItem('dinner','');
                      localStorage.setItem('brunch','active');


                      }
                      if(this.com[0]=="1" && this.com[1]=="4"){
                        localStorage.setItem('breakfast','');
                        localStorage.setItem('launch','active');
                        localStorage.setItem('dinner','active');
                        localStorage.setItem('brunch','');

                      }
                       if(this.com[0]=="2" && this.com[1]=="3"){
                        localStorage.setItem('brunch','active');
                        localStorage.setItem('breakfast','active');
                        localStorage.setItem('launch','');
                        localStorage.setItem('dinner','');
                      }
                      if(this.com[0]=="2" && this.com[1]=="4"){
                        localStorage.setItem('brunch','');
                        localStorage.setItem('breakfast','active');
                        localStorage.setItem('launch','');
                        localStorage.setItem('dinner','active');
                      }
                      if(this.com[0]=="2" && this.com[1]=="4"){
                        localStorage.setItem('brunch','');
                        localStorage.setItem('breakfast','active');
                        localStorage.setItem('launch','');
                        localStorage.setItem('dinner','active');
                      }
                      if(this.com[0]=="3" && this.com[1]=="4"){
                        localStorage.setItem('brunch','');
                        localStorage.setItem('breakfast','active');
                        localStorage.setItem('launch','active');
                        localStorage.setItem('dinner','');
                      }
                  }

              }

              else if(this.stor.msg[0].menu_name=='U'){
             if(this.com.length==0){
              localStorage.setItem('dinner','active');

              localStorage.setItem('launch','active');

              localStorage.setItem('brunch','active');

              localStorage.setItem('isloggedin','true');
             }
             else{
              for(let j=0;j<this.com.length;j++){
                if(this.com[j]=="1"){

                  localStorage.setItem('breakfast','');

                }
                else if(this.com[j]=="2"){
                  localStorage.setItem('launch','');


                }
                else if(this.com[j]=="3"){
                  localStorage.setItem('dinner','');

                }
                else if(this.com[j]=="4"){
                  localStorage.setItem('brunch','');

                }
             }
             }
              }



          })
        this.router.navigate(['/menu_setup']).then(()=>{
        location.reload();
        });
      }
      else {
        this.router.navigate(['/changepass'])
      }

    },error=>{
      this.message="An error occurred"
      this.myFunction()})
  }
  myFunction() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 5000);
  }
  go_to_change()
  {
    this.router.navigate(['/changepass'])
  }
}
