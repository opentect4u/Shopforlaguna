import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
   res_id:any=localStorage.getItem('rest_id');
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(atob(this.res_id));
    
  }
  goto_order(){
    this.router.navigate(['/order',this.res_id]);
  }
  goto_payment(){
    this.router.navigate(['/payment',this.res_id]);
  }

}
