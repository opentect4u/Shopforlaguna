import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-create-menus',
  templateUrl: './create-menus.component.html',
  styleUrls: ['./create-menus.component.css']
})
export class CreateMenusComponent implements OnInit {
  res_name:any=localStorage.getItem('Restaurant_name');
  displayedColumns: string[] = ['id', 'Menu_name', 'Option'];
  dataSource=new  MatTableDataSource();
  create_menu:any='';
  Menu_id:any;
  get_unlimited:any=[];
  x:any;
  row_id:any;
  show_add_update_button:boolean=false;
  constructor(private lagunaserve:LagunaserviceService) { 
    
  }
  ngOnInit(): void {
    this.fetchdata();
  }

fetchdata(){
  // this.lagunaserve.
  this.lagunaserve.get_createmenu(localStorage.getItem('Restaurant_id')).subscribe(data=>{
    console.log(data);
    this.get_unlimited=data;
    this.putdata(this.get_unlimited.msg);
  })

}
putdata(v:any){
  this.dataSource=new MatTableDataSource(v);
}
  addmenu(){
    this.lagunaserve.get_createmenu(localStorage.getItem('Restaurant_id')).subscribe(data=>{
      console.log(data);
      this.get_unlimited=data;
       if(this.get_unlimited.msg.length<3){
         
        var dt={
          "res_id":localStorage.getItem('Restaurant_id'),
          "menu_name":this.create_menu,
          "user":localStorage.getItem('Restaurant_id'),
          "id":0
        }
        this.lagunaserve.post_createmenu(dt).subscribe(data=>{
          console.log(data);
          this.myFunction_submit();
          // this.show_add_update_button=true;
          this.create_menu='';
          this.fetchdata();
        })
       }
       else{
              this.myFunction();
       }
    })
 

  }

  check_empty(){
    if(this.create_menu==''){
      this.show_add_update_button=false;
    }
  }
  updatemenu(){
    var dt={
      "res_id":localStorage.getItem('Restaurant_id'),
      "menu_name":this.create_menu,
      "user":localStorage.getItem('Restaurant_id'),
      "id":this.Menu_id
    }
    this.lagunaserve.post_createmenu(dt).subscribe(data=>{
      console.log(data);
      this.myFunction_submit();
      this.fetchdata();
      
    })
  }
  myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  myFunction_submit() {
    this.x = document.getElementById("snackbar1");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  get_sec_id(menu_id:any,menu_description:any){
       this.Menu_id=menu_id;
       this.create_menu=menu_description;
     this.show_add_update_button=true;

       window.scrollTo(0, 0)
  }
  getrow_id(id:any){
     this.row_id=id;
  }
  delete_item(){
    this.lagunaserve.delete_menu(this.row_id).subscribe(data=>{
      console.log(data);
      this.fetchdata();
      this.create_menu='';
      this.show_add_update_button=false;
    })
  }
}


