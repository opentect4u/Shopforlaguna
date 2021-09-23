import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';

@Component({
  selector: 'app-confirmationmail',
  templateUrl: './confirmationmail.component.html',
  styleUrls: ['./confirmationmail.component.css']
})
export class ConfirmationmailComponent implements OnInit {
  name:any;
  comma:any;
  unapprove:any=[];
  approve:any=[];
  com:any=[];
  restaurant_name:any;
  store_data:any=[];
   resid:any;
   textarea:any;
   breakfast:any;
   Approv:any='';
   unapprov:any='';
   launch:any;
   radio1:any;
   radio2:any;
   dinner:any;
   con:any;
   enable=true;
   enable1=true;
   enable2=true;
   enable3=true;
   enable4=true;
   check1:any='';
   check2:any='';
   check3:any='';
   check4:any='';
   bind:boolean=true;


 
   brunch:any;
  constructor(private lagunaserve:LagunaserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.resid=this.route.snapshot.params['id'];
    this.lagunaserve.getrestaurant_check_menu_setup(this.resid).subscribe(data=>{
      console.log(data);
      this.store_data=data;
      this.name=this.store_data.msg[0].contact_name;
      this.restaurant_name=this.store_data.msg[0].restaurant_name;
      this.comma=this.store_data.msg[0].menu;
        this.com=this.comma.split(',');
        console.log(this.com.length);
        console.log(this.com);
      

       
        for(let i=0;i<this.com.length;i++){
          if(this.com[i]=='1'){
            this.check1=1;
          }
          else if(this.com[i]=='2'){
           
            this.check2=2;
          }
          else if(this.com[i]=='3'){
            this.check3=3;
          }
          else if(this.com[i]=='4'){
         
           this.check4=4;
          }
        }
    
     })
  }
  enableonlyapprovefield(event:any){
    console.log(event.target.value);
    
    if(event.target.checked==true){
      this.Approv='A';
      this.enable1=true;
      this.enable2=true;
       this.enable3=true;
      this.enable4=true;
      this.enable=true
      this.bind=false;


      this.breakfast=document.getElementById('breakfast');
       this.breakfast.checked=false;
      this.brunch=document.getElementById('brunch')
      this.brunch.checked=false;

       this.launch=document.getElementById('launch');
       this.launch.checked=false;
      
      this.dinner=document.getElementById('dinner');
       this.dinner.checked=false;
    }
    else {
      this.enable1=false;
      this.enable2=false;
       this.enable3=false;
      this.enable4=false;
      this.enable=false;
     this.Approv='';

      
    }
  }
  enableallfield(event:any){
    
   if(event.target.id=='css'){
    
    if(event.target.checked==true){
      this.enable=false;
      this.lagunaserve.getrestaurant_check_menu_setup(this.resid).subscribe(data=>{
        console.log(data);
        this.store_data=data;
        this.name=this.store_data.msg[0].contact_name;
        this.restaurant_name=this.store_data.msg[0].restaurant_name;
        this.comma=this.store_data.msg[0].menu;
        this.com=this.comma.split(',');
        console.log(this.com.length);
        console.log(this.com);
        for(let i=0;i<this.com.length;i++){
          if(this.com[i]=='1'){
            this.breakfast=document.getElementById('breakfast');
            this.breakfast.checked=true;
               this.enable1=false;
          }
          else if(this.com[i]=='2'){
            this.launch=document.getElementById('launch');
            this.launch.checked=true;
            this.enable2=false;
          }
          else if(this.com[i]=='3'){
            
            this.dinner=document.getElementById('dinner');
            this.dinner.checked=true;
            this.enable3=false;
          }
          else if(this.com[i]=='4'){
         
            this.enable4=false;
            this.brunch=document.getElementById('brunch')
            this.brunch.checked=false;
          }
        }
      })
    
     this.bind=true;
     this.unapprov='U';
    }
    else {
      this.unapprov='';
     this.enable1=true;
    this.enable2=true;
     this.enable3=true;
    this.enable4=true;
    this.enable=true;
    this.bind=true
    this.breakfast=document.getElementById('breakfast');
    this.breakfast.checked=false;
      this.brunch=document.getElementById('brunch')
      this.brunch.checked=false;

      this.launch=document.getElementById('launch');
       this.launch.checked=false;
      
      this.dinner=document.getElementById('dinner');
       this.dinner.checked=false;
      
    }
  }
  else if(event.target.id=='breakfast'){
    if(event.target.checked==true){
      this.check1='1';
    }
    else{
      this.check1='';
    }
  }
  else if(event.target.id=='launch'){
    if(event.target.checked==true){
      this.check2='2';
    }
    else{
      this.check2='';
    }
  }
  else if(event.target.id=='dinner'){
    if(event.target.checked==true){
      this.check3='3';
    }
    else{
      this.check3='';
    }
  }
  else if(event.target.id=='brunch'){
    if(event.target.checked==true){
      this.check4='4'
      ;
    }
    else{
      this.check4='';
    }
  }
  
  
  }
  prevent_null(event:any){
    console.log(this.textarea)
    if(this.textarea!=''){
         this.bind=false;
    }
    else {
         this.bind=true;
          
    }
  }

  getvalue(){
   this.radio1=document.getElementById('css');
    this.radio2=document.getElementById('html')
    if(this.radio1.checked){
      
      console.log("Breakfast:"+this.check1);
    console.log("launch:"+this.check2);
    console.log("dinner:"+this.check3);
     console.log("brunch:"+this.check4);
     console.log("Unapprove:"+this.unapprov);
     console.log("approve:"+this.Approv,this.textarea);
    this.unapprove.push({
     "apr_flag":this.unapprov,
      "res_id":this.resid,
      "menu_id": [{"dt": this.check1},{"dt":this.check2},{"dt":this.check3},{"dt":this.check4}],
      "desc":this.textarea
     });
     this.lagunaserve.post_approve_menu(this.unapprove).subscribe(data=>{
       console.log(data);
     })
    }
    else if(this.radio2.checked){
      console.log("Unapprove:"+this.unapprov);
       console.log("Approve:"+this.Approv);
       this.unapprove.push({"apr_flag":this.Approv,
      "res_id":this.resid});
      this.lagunaserve.post_approve_menu(this.unapprove).subscribe(data=>{
        console.log(data);
      })
    }
   


  }
}
