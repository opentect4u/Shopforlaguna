import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { url_set } from 'src/app/globalvar';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  id_rest: any;
  // menu_url:any="http://localhost:4200/menu/";
  menu_url=url_set.Redirect_url;
  res_nme:any;
  x: any;
  dashboardData:any=[];
  success:any;
  rest_nm:any;
  paymentData: any;
  constructor(private activatedroute: ActivatedRoute,private lagunaserve:LagunaserviceService, private router: Router, private _data: DataserviceService) { }

  ngOnInit(): void {
    this.id_rest = this.activatedroute.snapshot.params['id'];
    localStorage.setItem('rest_id',this.id_rest);
    console.log(atob(this.id_rest).split('/')[0]);
   console.log(this.id_rest);
  }
  go_to_login() {
    this.lagunaserve.get_specific_admin_dashboard(atob(this.id_rest).split('/')[0]).subscribe(data=>{console.log(data);
      this.dashboardData=data;
      this.dashboardData=this.dashboardData.msg;
      this.rest_nm=this.dashboardData[0].restaurant_name;
      this.rest_nm=this.rest_nm.replace(' ','_')
      console.log(this.rest_nm);
  
    console.log(this.rest_nm);

    var dt = {
      res_id: this.id_rest,
      url:this.menu_url= this.menu_url+this.rest_nm+'/'+btoa(this.id_rest)
      }
    console.log(dt);
     this._data.sendPaymentData(dt).subscribe(data => {
      console.log(data);
       this.success=data;
       console.log(this.success);
       
       if(this.success.suc == 1){
         localStorage.setItem('breakfast','active');
         localStorage.setItem('launch','active');
         localStorage.setItem('dinner','active');
         localStorage.setItem('brunch','active');

        localStorage.setItem('No_of_menu',this.success.res.no_of_menu);
        localStorage.setItem('Restaurant_id',this.success.res.id);
        localStorage.setItem('Restaurant_email',this.success.res.email);
        localStorage.setItem('Restaurant_name',this.success.res.restaurant_name);
       this.myFunction();
       setTimeout(() => {
        this.router.navigate(['/menu_setup']);
      }, 3000)
       }
      
    })
  })
   

   
  }
  myFunction() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(() => { this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
}
