import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  id_rest: any;
  x: any;
  success:any;
  paymentData: any;
  constructor(private activatedroute: ActivatedRoute, private router: Router, private _data: DataserviceService) { }

  ngOnInit(): void {
    this.id_rest = this.activatedroute.snapshot.params['id'];
    console.log(this.id_rest)
  }
  go_to_login() {
    var dt = {
      res_id: this.id_rest
    }
    this._data.sendPaymentData(dt).subscribe(data => {
      console.log(data);
       this.success=data;
       if(this.success.suc == 1){
         localStorage.setItem('No_of_menu',this.success.res.no_of_menu)
        localStorage.setItem('Restaurant_id',this.success.res.id);
        localStorage.setItem('Restaurant_email',this.success.res.email);
        localStorage.setItem('Restaurant_name',this.success.res.restaurant_name);
       this.myFunction();
       setTimeout(() => {
        this.router.navigate(['/menu_setup']);
      }, 3000)
       }
      
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
