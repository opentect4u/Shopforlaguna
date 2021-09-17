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
      console.log(data)
      this.myFunction();
    })

    setTimeout(() => {
      this.router.navigate(['/'])
    }, 3000)
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
