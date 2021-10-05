import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.css',

]
})
export class RestaurentComponent implements OnInit ,AfterViewInit{
  displayedColumns: string[] = ['id', 'restaurant_name', 'phone_no', 'contact_name','setup','edit','manage'];
  // dataSource = ELEMENT_DATA;
  userData:any;
  modeData:any;
  divid:any;
  flag:any;
  show_edit=false;
  setupmode:any;
  x:any;
  m='';
  dataSource= new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
  constructor(private spinner: NgxSpinnerService,private admin_data:LagunaserviceService,private router:Router) { }
  show_spinner=false;
  ngOnInit(): void {
    this.spinner.show()
    this.fetchdata();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsort;
  }
  myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  go_details(v:any){
    // alert(v);
    this.router.navigate(['/admin/restaurant_setup',btoa(v)])
  }
  fetchdata(){
    //Call APi
    this.admin_data.get_admin_dashboard().subscribe(data=>{console.log(data)
    this.userData=data
    // this.show_spinner=true;
    this.spinner.hide();
     this.putdata(this.userData.msg)
    })
  }
  putdata(v:any){
    this.dataSource= new MatTableDataSource(v);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.matsort;
    for(let i=0;i<v.length;i++){
      console.log('setup'+(i+1));
      // this.divid=document.getElementById('setup'+(i+1));
      // console.log(this.divid)
      // this.divid.style.display='none'
  
    }
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
click_setup(v:any,id:any){
  console.log(id)
  this.setupmode=document.getElementById('setupmodeid'+id);
  console.log("checked:"+v.checked);
  this.divid=document.getElementById('setup'+id);
  if(v.checked)
  {this.flag='S'
  this.m='Setup Mode: On'}
  else
  {
  this.flag='U'
  this.m='Setup Mode: Off'}
  this.admin_data.get_approval(this.flag,id).subscribe(data=>{console.log(data)
  this.modeData=data;
  if(this.modeData.suc==1){
   
    this.fetchdata();
    this.myFunction()
  }
  else{
    this.m="Error! Cannot change support mode. Please try again later!"
    
    this.fetchdata()
    this.myFunction()

  }
  
  },error=>{
    this.m="Error! Cannot change support mode. Please try again later!"
    this.fetchdata()
    this.myFunction()

  })
   
}


}
