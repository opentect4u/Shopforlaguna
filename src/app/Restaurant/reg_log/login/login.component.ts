import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',

]
})
export class LoginComponent implements OnInit {
  message='';
  constructor(private _data:DataserviceService,private router:Router) { }
  logData:any;
  x:any;
  confirm_modal:any;
  ngOnInit(): void {
    this.confirm_modal=document.getElementById('change_pass_modal');
    this.confirm_modal.style.display='none'
  }
  // function for sending the login credentials
  logSubmit(v:any){
    // this.confirm_modal.style.display='block';
    console.log(v);
    this._data.submit_log(v).subscribe(data=>{
      console.log(data);
      this.logData=data;
      if(this.logData.suc==2)
      {
        localStorage.setItem('token_rest_id','');
        alert('successful,need to change the password.')
        // this.router.navigate(['/changepass'])
      }
      else if(this.logData.suc==1) {
        alert('succesful,password has been changed.')
        localStorage.setItem('token_rest_id','');
       // this.router.navigate(['/dashboard'])

      }
      else{
        this.message="Failed to log in. Please check your ID and Password"
        this.myFunction()
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
