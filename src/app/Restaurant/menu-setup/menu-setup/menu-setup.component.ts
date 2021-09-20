import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-menu-setup',
  templateUrl: './menu-setup.component.html',
  styleUrls: ['./menu-setup.component.css']
})
export class MenuSetupComponent implements OnInit {
  PACK: any;
  BIRTH: any;
  ENTER: any;
  WALL: any;
  WIND: any;
  Packages: any = false;
  birth: any = true;
  entertainmen: any = true;
  wall: any = true;
  window: any = true;

  launch_url=true;


  london: any;
  paris: any;
  Tokyo: any;
  Laguna: any;
  tab1: any = false;
  tab2: any = true;
  tab3: any = true;
  tab4: any = true;
  tab5: any = true;
  t1: any = '';
  t2: any = '';
  t3: any = '';
  t4: any = '';
  t5: any = '';
  resid:any=localStorage.getItem('Restaurant_id');
  break_check:any;
  launch_check:any;
  brunch_check:any
  dinner_check:any
  storevalue: any = [];
  success:any;
  x:any;
  bkmenu:any;
  // For London
  mon:any=0;;
  tue:any=0;
  wed:any=0;
  thu:any=0;
  fri:any=0;
  sat:any=0;
  sun:any=0;
  every:any;
  
  //For Paris
  mon_launch:any=0;;
  tue_launch:any=0;
  wed_launch:any=0;
  thu_launch:any=0;
  fri_launch:any=0;
  sat_launch:any=0;
  sun_launch:any=0;
  
  // For Tokyo
  mon_dinner:any=0;;
  tue_dinner:any=0;
  wed_dinner:any=0;
  thu_dinner:any=0;
  fri_dinner:any=0;
  sat_dinner:any=0;
  sun_dinner:any=0;
  
  // For Laguna
  mon_brunch:any=0;;
  tue_brunch:any=0;
  wed_brunch:any=0;
  thu_brunch:any=0;
  fri_brunch:any=0;
  sat_brunch:any=0;
  sun_brunch:any=0;

  mon_check:any;
  tue_check:any;
  wed_check:any;
  thu_check:any;
  fri_check:any;
  sat_check:any;
  sun_check:any;
  // mon_check:any;


  
  breakfastcoverimage: any;
  breakfasttopimage: any;
  breakfastmenuimage: any;
  breakfastsectionimage:any; 

  v:any=0;

  launchcoverimage: any;
  launchtopimage: any;
  launchmenuimage: any;
  launchsectionimage:any;


  branchsectionimage:any;
  branchcoverimage:any;
  branchtopimage:any
  branchmenuimage:any;

  dinnersectionimage:any;
  dinnercoverimage:any;
 dinnertopimage:any
  dinnermenuimage:any;


  constructor(private _data: DataserviceService) { }

  ngOnInit(): void {
    
    this.PACK = document.getElementById('defaultOpen');
    this.PACK.className = 'active';
    this.PACK.style.background = '#00477e;';
    this.PACK.style.color = 'white';



  }
  // openCity(e:any){
  //   console.log(e);


  // }

  openCity(e: any) {
    if (e == 'London') {
      console.log(this.v);
       if((localStorage.getItem('No_of_menu')=='O')){
        if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){

        }
        else if(localStorage.getItem('No_of_menu')=='O'&&this.v!=1){
          console.log("asdasdasdasdasd");
          this.tab1 = false;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = true;
          this.tab5 = true;
          this.paris = document.getElementById('London');
          this.paris.className = 'active';
          this.PACK = document.getElementById('defaultOpen2');
          // this.PACK.className = 'active';
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen1');
          // this.PACK.className = 'active';
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
       
      
  
          this.ENTER = document.getElementById('defaultOpen3');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen');
            // this.PACK.className = 'active';
            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';
          
  
        }
       }
       else if(localStorage.getItem('No_of_menu')=='T'){
        if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
          //Snackbar
        }
        else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
          this.tab1 = false;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = true;
          this.tab5 = true;
          this.paris = document.getElementById('London');
          this.paris.className = 'active';
          this.PACK = document.getElementById('defaultOpen2');
          // this.PACK.className = 'active';
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen1');
          // this.PACK.className = 'active';
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
       
      
  
          this.ENTER = document.getElementById('defaultOpen3');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen');
            // this.PACK.className = 'active';
            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';
          
  
        }
       }
       else if(localStorage.getItem('No_of_menu')=='U'){
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = true;
        this.tab5 = true;
        this.paris = document.getElementById('London');
        this.paris.className = 'active';
        this.PACK = document.getElementById('defaultOpen2');
        
        this.PACK.style.background = '#f1f1f1';
        this.PACK.style.color = 'black';
        this.BIRTH = document.getElementById('defaultOpen1');
 
        this.BIRTH.style.background = '#f1f1f1';
        this.BIRTH.style.color = 'black';
     
    

        this.ENTER = document.getElementById('defaultOpen3');
        // this.PACK.className = 'active';
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';
        this.WALL = document.getElementById('defaultOpen');
          // this.PACK.className = 'active';
          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
        
       }


     }
    else if (e == 'Paris') {
      console.log(this.v);

     if(localStorage.getItem('No_of_menu')=='O'){
      if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
        //Snackbar
      }
     else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
      
       this.tab1 = true;
       this.tab2 = false;
       this.tab3 = true;
       this.tab4 = true;
       this.paris = document.getElementById('Paris');
       this.paris.className = 'active';
       this.PACK = document.getElementById('defaultOpen2');
       // this.PACK.className = 'active';
       this.PACK.style.background = '#f1f1f1';
       this.PACK.style.color = 'black';
     
       this.BIRTH = document.getElementById('defaultOpen');
       // this.PACK.className = 'active';
       this.BIRTH.style.background = '#f1f1f1';
       this.BIRTH.style.color = 'black';
   

       this.ENTER = document.getElementById('defaultOpen3');
       // this.PACK.className = 'active';
       this.ENTER.style.background = '#f1f1f1';
       this.ENTER.style.color = 'black';
       this.WALL = document.getElementById('defaultOpen1');
       // this.PACK.className = 'active';
       this.WALL.style.background = '#00477e';
       this.WALL.style.color = 'white';
      
     }
   
     }
    else if(localStorage.getItem('No_of_menu')=='T'){
     if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
           //Snackbar
        }
        else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
          this.tab1 = true;
          this.tab2 = false;
          this.tab3 = true;
          this.tab4 = true;
          this.paris = document.getElementById('Paris');
          this.paris.className = 'active';
          this.PACK = document.getElementById('defaultOpen2');
          // this.PACK.className = 'active';
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
        
          this.BIRTH = document.getElementById('defaultOpen');
          // this.PACK.className = 'active';
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
      
  
          this.ENTER = document.getElementById('defaultOpen3');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen1');
          // this.PACK.className = 'active';
          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
         
        }
      }
      else if(localStorage.getItem('No_of_menu')=='U'){
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = true;
        this.paris = document.getElementById('Paris');
        this.paris.className = 'active';
        this.PACK = document.getElementById('defaultOpen2');
      
        this.PACK.style.background = '#f1f1f1';
        this.PACK.style.color = 'black';
      
        this.BIRTH = document.getElementById('defaultOpen');
      
        this.BIRTH.style.background = '#f1f1f1';
        this.BIRTH.style.color = 'black';
    

        this.ENTER = document.getElementById('defaultOpen3');
    
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';
        this.WALL = document.getElementById('defaultOpen1');
        
        this.WALL.style.background = '#00477e';
        this.WALL.style.color = 'white';
      }
    }
    else if (e == 'Tokyo') {
      console.log(this.v);

        if(localStorage.getItem('No_of_menu')=='O'){
          if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
          //Snack Bar
          }
          else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
            this.tab1 = true;
            this.tab2 = true;
            this.tab3 = false;
            this.tab4 = true;
            this.paris = document.getElementById('Tokyo');
            this.paris.className = 'active';
            
            this.PACK = document.getElementById('defaultOpen1');
       
            this.PACK.style.background = '#f1f1f1';
            this.PACK.style.color = 'black';
            this.BIRTH = document.getElementById('defaultOpen');
     
            this.BIRTH.style.background = '#f1f1f1';
            this.BIRTH.style.color = 'black';
        
    
            this.ENTER = document.getElementById('defaultOpen3');
    
            this.ENTER.style.background = '#f1f1f1';
            this.ENTER.style.color = 'black';
            this.WALL = document.getElementById('defaultOpen2');
    
            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';
          }
        }
        else if(localStorage.getItem('No_of_menu')=='T')
         {
          if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
            //Snack Bar
            }
            else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
              this.tab1 = true;
              this.tab2 = true;
              this.tab3 = false;
              this.tab4 = true;
              this.paris = document.getElementById('Tokyo');
              this.paris.className = 'active';
              
              this.PACK = document.getElementById('defaultOpen1');
         
              this.PACK.style.background = '#f1f1f1';
              this.PACK.style.color = 'black';
              this.BIRTH = document.getElementById('defaultOpen');
       
              this.BIRTH.style.background = '#f1f1f1';
              this.BIRTH.style.color = 'black';
          
      
              this.ENTER = document.getElementById('defaultOpen3');
      
              this.ENTER.style.background = '#f1f1f1';
              this.ENTER.style.color = 'black';
              this.WALL = document.getElementById('defaultOpen2');
      
              this.WALL.style.background = '#00477e';
              this.WALL.style.color = 'white';
            }
         }
         else if(localStorage.getItem('No_of_menu')=='U'){
          this.tab1 = true;
          this.tab2 = true;
          this.tab3 = false;
          this.tab4 = true;
          this.paris = document.getElementById('Tokyo');
          this.paris.className = 'active';
          
          this.PACK = document.getElementById('defaultOpen1');
     
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen');
   
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
      
  
          this.ENTER = document.getElementById('defaultOpen3');
  
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen2');
  
          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
         }
      
     
    }
    else if (e == 'Laguna') {
      console.log(this.v);

    if(localStorage.getItem('No_of_menu')=='O'){
          if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
            //Snackbar
          }
         else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
          this.tab1 = true;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = false;
        
          this.paris = document.getElementById('Laguna');
          this.paris.className = 'active';
          this.PACK = document.getElementById('defaultOpen2');
     
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen1');
        
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
          this.ENTER = document.getElementById('defaultOpen');
        
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
      
  
          this.WALL = document.getElementById('defaultOpen3');
         
          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
      
         }
        }
      else if(localStorage.getItem('No_of_menu')=='T'){
      if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
        //Snackbar
      }
     else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
      this.tab1 = true;
      this.tab2 = true;
      this.tab3 = true;
      this.tab4 = false;
    
      this.paris = document.getElementById('Laguna');
      this.paris.className = 'active';
      this.PACK = document.getElementById('defaultOpen2');
 
      this.PACK.style.background = '#f1f1f1';
      this.PACK.style.color = 'black';
      this.BIRTH = document.getElementById('defaultOpen1');
    
      this.BIRTH.style.background = '#f1f1f1';
      this.BIRTH.style.color = 'black';
      this.ENTER = document.getElementById('defaultOpen');
    
      this.ENTER.style.background = '#f1f1f1';
      this.ENTER.style.color = 'black';
  

      this.WALL = document.getElementById('defaultOpen3');
     
      this.WALL.style.background = '#00477e';
      this.WALL.style.color = 'white';
  
     }
       }
       else if(localStorage.getItem('No_of_menu')=='U'){
        this.tab1 = true;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = false;
      
        this.paris = document.getElementById('Laguna');
        this.paris.className = 'active';
        this.PACK = document.getElementById('defaultOpen2');
   
        this.PACK.style.background = '#f1f1f1';
        this.PACK.style.color = 'black';
        this.BIRTH = document.getElementById('defaultOpen1');
      
        this.BIRTH.style.background = '#f1f1f1';
        this.BIRTH.style.color = 'black';
        this.ENTER = document.getElementById('defaultOpen');
      
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';
    
  
        this.WALL = document.getElementById('defaultOpen3');
       
        this.WALL.style.background = '#00477e';
        this.WALL.style.color = 'white';
       }
    }
    

  }

  // For submitting data of Breakfast tab
  opensecondtab(e: any) {
    if (e == 'London') {
      this.Packages = true;
      this.PACK = document.getElementById('Tokyo');
      this.PACK.className = 'active';
      this.birth = false;
      this.entertainmen = true;
      this.wall = true;
      this.window = true

      // this.PACK=document.getElementById('packages');
      // this.PACK.className='active';

    }
    else if (e == 'Tokyo') {
      console.log('asdasd');
      this.Packages = true;

      this.birth = false;
      this.entertainmen = true;
      this.wall = true;
      this.window = true

      this.BIRTH = document.getElementById('Laguna');
      this.BIRTH.className = 'active';
    }
    else if (e == 'Laguna') {
      this.Packages = true;

      this.birth = true;
      this.entertainmen = false;
      this.wall = false;
      this.window = true

      this.ENTER = document.getElementById('Shrewsbury');
      this.ENTER.className = 'active';
    }
    //   else if(e=='wallSignHolder'){
    //     this.Packages=true;

    // this.birth=true;
    // this.entertainmen=true;
    // this.wall=false;
    // this.window=true

    //     this.PACK=document.getElementById('windowCling');
    //     this.PACK.className='active';
    //   }
    //   else if(e=='windowCling'){
    //     this.Packages=true;

    // this.birth=true;
    // this.entertainmen=true;
    // this.wall=true;
    // this.window=false;

    // this.PACK=document.getElementById('packages');
    // this.PACK.className='active';
    // }
  }
  Finish() {
  }
  checkbreakfast(event:any){
    if(event.target.checked){
              this.break_check='Y';
    }
    else{
      this.break_check='N';
    }
  }
  opennextab(COVERPAGEURL: any, TOPIMAGEURL: any,MENUURL:any,SECTIONURL:any,hidevalue:any,v1:any,v2:any) {
    if(localStorage.getItem('No_of_menu')=='O'){
      if(this.v==0){
        this.v=1;
        this.storevalue.length=0;
     this.storevalue.push({
      "coverurl": COVERPAGEURL,
      "topurl": TOPIMAGEURL,
      "MenuUrl":MENUURL,
      "SectionUrl":SECTIONURL,
      "restaurant_id":this.resid,
      "menu_id":hidevalue,
      "break_check":this.break_check,
      "start_time":v1,
      "end_time":v2,
      "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
    });

  
    this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
      console.log(data);
      this.success=data;
      console.log("data");
       if(this.success.suc==1){
          this.myFunction();
          this.bkmenu=document.getElementById('bkmenu');
          this.bkmenu.checked=false;
          this.break_check='N';
          this.bkmenu=document.getElementById('url');
          this.bkmenu.value='';
          this.bkmenu=document.getElementById('url_top');
            this.bkmenu.value='';
            this.bkmenu=document.getElementById('url_menu');
            this.bkmenu.value='';
            this.bkmenu=document.getElementById('Url_section');
            this.bkmenu.value='';
            this.bkmenu=document.getElementById('start');
            this.bkmenu.value='';
            this.bkmenu=document.getElementById('end');
            this.bkmenu.value='';
       }
    })
    console.log(this.storevalue);
    this.mon_check=document.getElementById('vehicle1');
    this.mon_check.checked=false;
    this.mon_check=document.getElementById('vehicle2');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle3');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle4');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle5');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle6');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle7');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle8');
        this.sun_check.checked=false;
    this.mon=0;;
    this.tue=0;
    this.wed=0;
    this.thu=0;
    this.fri=0;
    this.sat=0;
    this.sun=0;
      }
      else{
        //snackbar
      }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){  
      if(this.v==0){
        this.v=1;
        this.storevalue.length=0;
        this.storevalue.push({
         "coverurl": COVERPAGEURL,
         "topurl": TOPIMAGEURL,
         "MenuUrl":MENUURL,
         "SectionUrl":SECTIONURL,
         "restaurant_id":this.resid,
         "menu_id":hidevalue,
         "break_check":this.break_check,
         "start_time":v1,
         "end_time":v2,
         "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
       });
   
     
       this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
         console.log(data);
         this.success=data;
         console.log("data");
          if(this.success.suc==1){
             this.myFunction();
             this.bkmenu=document.getElementById('bkmenu');
             this.bkmenu.checked=false;
             this.break_check='N';
             this.bkmenu=document.getElementById('url');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('url_top');
               this.bkmenu.value='';
               this.bkmenu=document.getElementById('url_menu');
               this.bkmenu.value='';
               this.bkmenu=document.getElementById('Url_section');
               this.bkmenu.value='';
               this.bkmenu=document.getElementById('start');
               this.bkmenu.value='';
               this.bkmenu=document.getElementById('end');
               this.bkmenu.value='';
          }
       })
       console.log(this.storevalue);
       this.mon_check=document.getElementById('vehicle1');
       this.mon_check.checked=false;
       this.mon_check=document.getElementById('vehicle2');
           this.mon_check.checked=false;
           this.tue_check=document.getElementById('vehicle3');
           this.tue_check.checked=false;
           this.wed_check=document.getElementById('vehicle4');
           this.wed_check.checked=false;
           this.thu_check=document.getElementById('vehicle5');
           this.thu_check.checked=false;
           this.fri_check=document.getElementById('vehicle6');
           this.fri_check.checked=false;
           this.sat_check=document.getElementById('vehicle7');
           this.sat_check.checked=false;
           this.sun_check=document.getElementById('vehicle8');
           this.sun_check.checked=false;
       this.mon=0;;
       this.tue=0;
       this.wed=0;
       this.thu=0;
       this.fri=0;
       this.sat=0;
       this.sun=0;

      }
      else if(this.v==1){
        this.v=2;
        this.storevalue.length=0;
        this.storevalue.push({
         "coverurl": COVERPAGEURL,
         "topurl": TOPIMAGEURL,
         "MenuUrl":MENUURL,
         "SectionUrl":SECTIONURL,
         "restaurant_id":this.resid,
         "menu_id":hidevalue,
         "break_check":this.break_check,
         "start_time":v1,
         "end_time":v2,
         "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
       });
   
     
       this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
         console.log(data);
         this.success=data;
         console.log("data");
          if(this.success.suc==1){
             this.myFunction();
             this.bkmenu=document.getElementById('bkmenu');
             this.bkmenu.checked=false;
             this.break_check='N';
             this.bkmenu=document.getElementById('url');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('url_top');
               this.bkmenu.value='';
               this.bkmenu=document.getElementById('url_menu');
               this.bkmenu.value='';
               this.bkmenu=document.getElementById('Url_section');
               this.bkmenu.value='';
               this.bkmenu=document.getElementById('start');
               this.bkmenu.value='';
               this.bkmenu=document.getElementById('end');
               this.bkmenu.value='';
          }
       })
       console.log(this.storevalue);
       this.mon_check=document.getElementById('vehicle1');
       this.mon_check.checked=false;
       this.mon_check=document.getElementById('vehicle2');
           this.mon_check.checked=false;
           this.tue_check=document.getElementById('vehicle3');
           this.tue_check.checked=false;
           this.wed_check=document.getElementById('vehicle4');
           this.wed_check.checked=false;
           this.thu_check=document.getElementById('vehicle5');
           this.thu_check.checked=false;
           this.fri_check=document.getElementById('vehicle6');
           this.fri_check.checked=false;
           this.sat_check=document.getElementById('vehicle7');
           this.sat_check.checked=false;
           this.sun_check=document.getElementById('vehicle8');
           this.sun_check.checked=false;
       this.mon=0;;
       this.tue=0;
       this.wed=0;
       this.thu=0;
       this.fri=0;
       this.sat=0;
       this.sun=0;

      }
      else{
        //snackbar
      }
    }
    else {
      this.v=3
      this.storevalue.length=0;
      this.storevalue.push({
       "coverurl": COVERPAGEURL,
       "topurl": TOPIMAGEURL,
       "MenuUrl":MENUURL,
       "SectionUrl":SECTIONURL,
       "restaurant_id":this.resid,
       "menu_id":hidevalue,
       "break_check":this.break_check,
       "start_time":v1,
       "end_time":v2,
       "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
     });
 
   
     this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
       console.log(data);
       this.success=data;
       console.log("data");
        if(this.success.suc==1){
           this.myFunction();
           this.bkmenu=document.getElementById('bkmenu');
           this.bkmenu.checked=false;
           this.break_check='N';
           this.bkmenu=document.getElementById('url');
           this.bkmenu.value='';
           this.bkmenu=document.getElementById('url_top');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('url_menu');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('Url_section');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('start');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('end');
             this.bkmenu.value='';
        }
     })
     console.log(this.storevalue);
     this.mon_check=document.getElementById('vehicle1');
     this.mon_check.checked=false;
     this.mon_check=document.getElementById('vehicle2');
         this.mon_check.checked=false;
         this.tue_check=document.getElementById('vehicle3');
         this.tue_check.checked=false;
         this.wed_check=document.getElementById('vehicle4');
         this.wed_check.checked=false;
         this.thu_check=document.getElementById('vehicle5');
         this.thu_check.checked=false;
         this.fri_check=document.getElementById('vehicle6');
         this.fri_check.checked=false;
         this.sat_check=document.getElementById('vehicle7');
         this.sat_check.checked=false;
         this.sun_check=document.getElementById('vehicle8');
         this.sun_check.checked=false;
     this.mon=0;;
     this.tue=0;
     this.wed=0;
     this.thu=0;
     this.fri=0;
     this.sat=0;
     this.sun=0;
    }
 

    
    
   

    // console.log(COVERPAGEURL + TOPIMAGEURL);
    // this.t1 = 'London';
    // this.t2 = 'Paris';
    // this.tab2 = false;
    // this.tab1 = true;
    // this.tab3 = true;
    // this.tab4 = true;
    // this.paris = document.getElementById('Paris');
    // this.paris.className = 'active';


  }

  // For Submitting the data of Dinner
  opennextab2(e: any,v1:any,v2:any,v3:any,v4:any,v5:any,v6:any,v7:any) {
    if(localStorage.getItem('No_of_menu')=='O'){
      if(this.v==0){
        this.v=1;
        this.storevalue.length=0;
        this.storevalue.push({
              "coverurl": v4,
              "topurl": v3,"MenuUrl":v2,"SectionUrl":v1,
              "restaurant_id":this.resid,
              "menu_id":v5,
              "break_check":this.brunch_check,
              "start_time":v1,
          "end_time":v2,
          "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]
    
            });
            console.log(this.storevalue);
            this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
              console.log(data);
              this.success=data;
              if(this.success.suc==1){
                this.myFunction();
                this.bkmenu=document.getElementById('tokyo');
                this.bkmenu.checked=false;
                this.brunch_check='N';
                this.bkmenu=document.getElementById('url_topbrunch');
                this.bkmenu.value='';
                this.bkmenu=document.getElementById('url_menubrunch');
                  this.bkmenu.value='';
                  this.bkmenu=document.getElementById('url_sectionbrunch');
                  this.bkmenu.value='';
                  this.bkmenu=document.getElementById('url_brunch');
                  this.bkmenu.value='';
                  this.bkmenu=document.getElementById('start_brunch');
                  this.bkmenu.value='';
                  this.bkmenu=document.getElementById('end_brunch');
                  this.bkmenu.value='';
    
              }
            })
            this.mon_check=document.getElementById('vehicle13');
            this.mon_check.checked=false;
            this.mon_check=document.getElementById('vehicle23');
            this.mon_check.checked=false;
            this.tue_check=document.getElementById('vehicle33');
            this.tue_check.checked=false;
            this.wed_check=document.getElementById('vehicle43');
            this.wed_check.checked=false;
            this.thu_check=document.getElementById('vehicle53');
            this.thu_check.checked=false;
            this.fri_check=document.getElementById('vehicle63');
            this.fri_check.checked=false;
            this.sat_check=document.getElementById('vehicle73');
            this.sat_check.checked=false;
            this.sun_check=document.getElementById('vehicle83');
            this.sun_check.checked=false;
            this.mon_dinner=0;
            this.tue_dinner=0;
            this.wed_dinner=0;
            this.thu_dinner=0;
            this.fri_dinner=0;
            this.sat_dinner=0;
            this.sun_dinner=0;
      }
      else{
        //SnackBar
      }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){
         if(this.v==0){
           this.v=1;
           this.storevalue.length=0;
           this.storevalue.push({
                 "coverurl": v4,
                 "topurl": v3,"MenuUrl":v2,"SectionUrl":v1,
                 "restaurant_id":this.resid,
                 "menu_id":v5,
                 "break_check":this.brunch_check,
                 "start_time":v1,
             "end_time":v2,
             "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]
       
               });
               console.log(this.storevalue);
               this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
                 console.log(data);
                 this.success=data;
                 if(this.success.suc==1){
                   this.myFunction();
                   this.bkmenu=document.getElementById('tokyo');
                   this.bkmenu.checked=false;
                   this.brunch_check='N';
                   this.bkmenu=document.getElementById('url_topbrunch');
                   this.bkmenu.value='';
                   this.bkmenu=document.getElementById('url_menubrunch');
                     this.bkmenu.value='';
                     this.bkmenu=document.getElementById('url_sectionbrunch');
                     this.bkmenu.value='';
                     this.bkmenu=document.getElementById('url_brunch');
                     this.bkmenu.value='';
                     this.bkmenu=document.getElementById('start_brunch');
                     this.bkmenu.value='';
                     this.bkmenu=document.getElementById('end_brunch');
                     this.bkmenu.value='';
       
                 }
               })
               this.mon_check=document.getElementById('vehicle13');
               this.mon_check.checked=false;
               this.mon_check=document.getElementById('vehicle23');
               this.mon_check.checked=false;
               this.tue_check=document.getElementById('vehicle33');
               this.tue_check.checked=false;
               this.wed_check=document.getElementById('vehicle43');
               this.wed_check.checked=false;
               this.thu_check=document.getElementById('vehicle53');
               this.thu_check.checked=false;
               this.fri_check=document.getElementById('vehicle63');
               this.fri_check.checked=false;
               this.sat_check=document.getElementById('vehicle73');
               this.sat_check.checked=false;
               this.sun_check=document.getElementById('vehicle83');
               this.sun_check.checked=false;
               this.mon_dinner=0;
               this.tue_dinner=0;
               this.wed_dinner=0;
               this.thu_dinner=0;
               this.fri_dinner=0;
               this.sat_dinner=0;
               this.sun_dinner=0;
         }
         else if(this.v==1){
           this.v=2;
           this.storevalue.length=0;
           this.storevalue.push({
                 "coverurl": v4,
                 "topurl": v3,"MenuUrl":v2,"SectionUrl":v1,
                 "restaurant_id":this.resid,
                 "menu_id":v5,
                 "break_check":this.brunch_check,
                 "start_time":v1,
             "end_time":v2,
             "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]
       
               });
               console.log(this.storevalue);
               this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
                 console.log(data);
                 this.success=data;
                 if(this.success.suc==1){
                   this.myFunction();
                   this.bkmenu=document.getElementById('tokyo');
                   this.bkmenu.checked=false;
                   this.brunch_check='N';
                   this.bkmenu=document.getElementById('url_topbrunch');
                   this.bkmenu.value='';
                   this.bkmenu=document.getElementById('url_menubrunch');
                     this.bkmenu.value='';
                     this.bkmenu=document.getElementById('url_sectionbrunch');
                     this.bkmenu.value='';
                     this.bkmenu=document.getElementById('url_brunch');
                     this.bkmenu.value='';
                     this.bkmenu=document.getElementById('start_brunch');
                     this.bkmenu.value='';
                     this.bkmenu=document.getElementById('end_brunch');
                     this.bkmenu.value='';
       
                 }
               })
               this.mon_check=document.getElementById('vehicle13');
               this.mon_check.checked=false;
               this.mon_check=document.getElementById('vehicle23');
               this.mon_check.checked=false;
               this.tue_check=document.getElementById('vehicle33');
               this.tue_check.checked=false;
               this.wed_check=document.getElementById('vehicle43');
               this.wed_check.checked=false;
               this.thu_check=document.getElementById('vehicle53');
               this.thu_check.checked=false;
               this.fri_check=document.getElementById('vehicle63');
               this.fri_check.checked=false;
               this.sat_check=document.getElementById('vehicle73');
               this.sat_check.checked=false;
               this.sun_check=document.getElementById('vehicle83');
               this.sun_check.checked=false;
               this.mon_dinner=0;
               this.tue_dinner=0;
               this.wed_dinner=0;
               this.thu_dinner=0;
               this.fri_dinner=0;
               this.sat_dinner=0;
               this.sun_dinner=0;
         }
         else {
           //SnackBar
         }
    }
    else {
       this.v=3;
       this.storevalue.length=0;
       this.storevalue.push({
             "coverurl": v4,
             "topurl": v3,"MenuUrl":v2,"SectionUrl":v1,
             "restaurant_id":this.resid,
             "menu_id":v5,
             "break_check":this.brunch_check,
             "start_time":v1,
         "end_time":v2,
         "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]
   
           });
           console.log(this.storevalue);
           this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
             console.log(data);
             this.success=data;
             if(this.success.suc==1){
               this.myFunction();
               this.bkmenu=document.getElementById('tokyo');
               this.bkmenu.checked=false;
               this.brunch_check='N';
               this.bkmenu=document.getElementById('url_topbrunch');
               this.bkmenu.value='';
               this.bkmenu=document.getElementById('url_menubrunch');
                 this.bkmenu.value='';
                 this.bkmenu=document.getElementById('url_sectionbrunch');
                 this.bkmenu.value='';
                 this.bkmenu=document.getElementById('url_brunch');
                 this.bkmenu.value='';
                 this.bkmenu=document.getElementById('start_brunch');
                 this.bkmenu.value='';
                 this.bkmenu=document.getElementById('end_brunch');
                 this.bkmenu.value='';
   
             }
           })
           this.mon_check=document.getElementById('vehicle13');
           this.mon_check.checked=false;
           this.mon_check=document.getElementById('vehicle23');
           this.mon_check.checked=false;
           this.tue_check=document.getElementById('vehicle33');
           this.tue_check.checked=false;
           this.wed_check=document.getElementById('vehicle43');
           this.wed_check.checked=false;
           this.thu_check=document.getElementById('vehicle53');
           this.thu_check.checked=false;
           this.fri_check=document.getElementById('vehicle63');
           this.fri_check.checked=false;
           this.sat_check=document.getElementById('vehicle73');
           this.sat_check.checked=false;
           this.sun_check=document.getElementById('vehicle83');
           this.sun_check.checked=false;
           this.mon_dinner=0;
           this.tue_dinner=0;
           this.wed_dinner=0;
           this.thu_dinner=0;
           this.fri_dinner=0;
           this.sat_dinner=0;
           this.sun_dinner=0;
    }
   
    // if (e == 'Tokyo') {
    //   this.t1 = 'London';
    //   this.t2 = 'Paris';
    //   this.t3 = 'Tokyo';
    //   this.t4 = 'Laguna';
    //   this.tab1 = true;
    //   this.tab2 = true;

    //   this.tab3 = true;
    //   this.tab4 = false;
    //   this.paris = document.getElementById('Laguna');
    //   this.paris.className = 'active';
    // }
  }

  launchchaked(event:any){
       if(event.target.checked){
         this.launch_check='Y';
       }
       else{
        this.launch_check='N';

       }
  }

// Fot Submitting data of Launch Tab
  opennextab1(e: any, v1: any, v2: any,v4:any,v5:any,v6:any,v7:any,v8:any) {
    if(localStorage.getItem('No_of_menu')=='O'){
      if(this.v==0){
           this.v=1
           this.storevalue.length=0;
    this.storevalue.push({
          "coverurl": v1,
          "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
          "restaurant_id":this.resid,
          "menu_id":v6,
          "break_check":this.launch_check,
          "start_time":v1,
      "end_time":v2,
      "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

        });
        this.success=0;
        console.log(this.storevalue);
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
          this.success=data;
          if(this.success.suc==1){
            this.myFunction();
            this.bkmenu=document.getElementById('paris');
            this.bkmenu.checked=false;
            this.launch_check='N';
            this.bkmenu=document.getElementById('url_launch');
            this.bkmenu.value='';
            this.bkmenu=document.getElementById('url_launchtop');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('url_launchmenu');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('url_launchsection');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('start_launch');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('end_launch');
              this.bkmenu.value='';
          }
        })
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
        this.mon_check=document.getElementById('vehicle22');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle32');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle42');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle52');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle62');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle72');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle82');
        this.sun_check.checked=false;
        this.mon_launch=0;
        this.tue_launch=0;
        this.wed_launch=0;
        this.thu_launch=0;
        this.fri_launch=0;
        this.sat_launch=0;
        this.sun_launch=0;
      }
      else{
   //Snackbar
      }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){
            if(this.v==0){
           this.v=1
           this.storevalue.length=0;
    this.storevalue.push({
          "coverurl": v1,
          "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
          "restaurant_id":this.resid,
          "menu_id":v6,
          "break_check":this.launch_check,
          "start_time":v1,
      "end_time":v2,
      "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

        });
        this.success=0;
        console.log(this.storevalue);
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
          this.success=data;
          if(this.success.suc==1){
            this.myFunction();
            this.bkmenu=document.getElementById('paris');
            this.bkmenu.checked=false;
            this.launch_check='N';
            this.bkmenu=document.getElementById('url_launch');
            this.bkmenu.value='';
            this.bkmenu=document.getElementById('url_launchtop');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('url_launchmenu');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('url_launchsection');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('start_launch');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('end_launch');
              this.bkmenu.value='';
          }
        })
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
        this.mon_check=document.getElementById('vehicle22');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle32');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle42');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle52');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle62');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle72');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle82');
        this.sun_check.checked=false;
        this.mon_launch=0;
        this.tue_launch=0;
        this.wed_launch=0;
        this.thu_launch=0;
        this.fri_launch=0;
        this.sat_launch=0;
        this.sun_launch=0;
          }
          else if(this.v==1){
             this.v=2;
             this.storevalue.length=0;
          this.storevalue.push({
          "coverurl": v1,
          "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
          "restaurant_id":this.resid,
          "menu_id":v6,
          "break_check":this.launch_check,
          "start_time":v1,
      "end_time":v2,
      "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

        });
        this.success=0;
        console.log(this.storevalue);
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
          this.success=data;
          if(this.success.suc==1){
            this.myFunction();
            this.bkmenu=document.getElementById('paris');
            this.bkmenu.checked=false;
            this.launch_check='N';
            this.bkmenu=document.getElementById('url_launch');
            this.bkmenu.value='';
            this.bkmenu=document.getElementById('url_launchtop');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('url_launchmenu');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('url_launchsection');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('start_launch');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('end_launch');
              this.bkmenu.value='';
          }
        })
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
        this.mon_check=document.getElementById('vehicle22');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle32');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle42');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle52');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle62');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle72');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle82');
        this.sun_check.checked=false;
        this.mon_launch=0;
        this.tue_launch=0;
        this.wed_launch=0;
        this.thu_launch=0;
        this.fri_launch=0;
        this.sat_launch=0;
        this.sun_launch=0;
          }
         else{
             //SnackBar
          }
    }
    else {
      this.v=3;
      this.storevalue.length=0;
      this.storevalue.push({
      "coverurl": v1,
      "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
      "restaurant_id":this.resid,
      "menu_id":v6,
      "break_check":this.launch_check,
      "start_time":v1,
  "end_time":v2,
  "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

    });
    this.success=0;
    console.log(this.storevalue);
    this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
      console.log(data);
      this.success=data;
      if(this.success.suc==1){
        this.myFunction();
        this.bkmenu=document.getElementById('paris');
        this.bkmenu.checked=false;
        this.launch_check='N';
        this.bkmenu=document.getElementById('url_launch');
        this.bkmenu.value='';
        this.bkmenu=document.getElementById('url_launchtop');
          this.bkmenu.value='';
          this.bkmenu=document.getElementById('url_launchmenu');
          this.bkmenu.value='';
          this.bkmenu=document.getElementById('url_launchsection');
          this.bkmenu.value='';
          this.bkmenu=document.getElementById('start_launch');
          this.bkmenu.value='';
          this.bkmenu=document.getElementById('end_launch');
          this.bkmenu.value='';
      }
    })
    this.every=document.getElementById('vehicle12');
    this.every.checked=false;
    this.mon_check=document.getElementById('vehicle22');
    this.mon_check.checked=false;
    this.tue_check=document.getElementById('vehicle32');
    this.tue_check.checked=false;
    this.wed_check=document.getElementById('vehicle42');
    this.wed_check.checked=false;
    this.thu_check=document.getElementById('vehicle52');
    this.thu_check.checked=false;
    this.fri_check=document.getElementById('vehicle62');
    this.fri_check.checked=false;
    this.sat_check=document.getElementById('vehicle72');
    this.sat_check.checked=false;
    this.sun_check=document.getElementById('vehicle82');
    this.sun_check.checked=false;
    this.mon_launch=0;
    this.tue_launch=0;
    this.wed_launch=0;
    this.thu_launch=0;
    this.fri_launch=0;
    this.sat_launch=0;
    this.sun_launch=0;
    }
  

    // if (e == 'Paris') {
    //   this.storevalue.length = 0;
    //   this.storevalue.push({
    //     "coverimg": this.launchcoverimage, "topimg": this.launchtopimage, "menuimg": this.launchmenuimage, "coverurl": v1,
    //     "topurl": v2
    //   });
    //   console.log(this.storevalue);
    //   this.t1 = 'London';
    //   this.t2 = 'Paris';
    //   this.t3 = 'Tokyo';
    //   this.tab1 = true;
    //   this.tab2 = true;

    //   this.tab3 = false;
    //   this.tab4 = true;
    //   this.paris = document.getElementById('Tokyo');
    //   this.paris.className = 'active';
    // }
  }
  checkbrunch(event:any){
    if(event.target.checked){
      this.brunch_check='Y';
    }
    else{
     this.brunch_check='N';

    }
  }
  checkdinner(event:any){
     
    if(event.target.checked){
      this.dinner_check='Y';
    }
    else{
     this.dinner_check='N';

    }
  }
  // For Submitting the data of Brunch
 opennextab3(e: any,v1:any,v2:any,v3:any,v4:any,v5:any,v6:any,v7:any) {
    if(localStorage.getItem('No_of_menu')=='O'){
       if(this.v==0){
         this.v=1;
         this.storevalue.length=0;
         this.storevalue.push({
          "coverurl": v3,
          "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
          "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":v1,
          "end_time":v2,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

        });
        console.log(this.storevalue);
        this.success=0
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
          this.success=data;
          if(this.success.suc==1){
            this.myFunction();
            this.bkmenu=document.getElementById('laguna');
            this.bkmenu.checked=false;
            this.dinner_check='N';
            this.bkmenu=document.getElementById('url_dinner');
            this.bkmenu.value='';
            this.bkmenu=document.getElementById('url_dinnertop');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('url_dinnermenu');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('url_section');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('start_dinner');
              this.bkmenu.value='';
              this.bkmenu=document.getElementById('end_dinner');
              this.bkmenu.value='';
          }
        })
        this.mon_check=document.getElementById('vehicle14');
        this.mon_check.checked=false;
        this.mon_check=document.getElementById('vehicle24');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle34');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle44');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle54');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle64');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle74');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle84');
        this.sun_check.checked=false;
        this.mon_brunch=0;
        this.tue_brunch=0;
        this.wed_brunch=0;
        this.thu_brunch=0;
        this.fri_brunch=0;
        this.sat_brunch=0;
        this.sun_brunch=0;
       }
       else if(this.v==1){
         //snackBar
       }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){
      if(this.v==0){
        this.v=1;
        this.storevalue.length=0;
        this.storevalue.push({
         "coverurl": v3,
         "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
         "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":v1,
         "end_time":v2,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

       });
       console.log(this.storevalue);
       this.success=0
       this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
         console.log(data);
         this.success=data;
         if(this.success.suc==1){
           this.myFunction();
           this.bkmenu=document.getElementById('laguna');
           this.bkmenu.checked=false;
           this.dinner_check='N';
           this.bkmenu=document.getElementById('url_dinner');
           this.bkmenu.value='';
           this.bkmenu=document.getElementById('url_dinnertop');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('url_dinnermenu');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('url_section');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('start_dinner');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('end_dinner');
             this.bkmenu.value='';
         }
       })
       this.mon_check=document.getElementById('vehicle14');
       this.mon_check.checked=false;
       this.mon_check=document.getElementById('vehicle24');
       this.mon_check.checked=false;
       this.tue_check=document.getElementById('vehicle34');
       this.tue_check.checked=false;
       this.wed_check=document.getElementById('vehicle44');
       this.wed_check.checked=false;
       this.thu_check=document.getElementById('vehicle54');
       this.thu_check.checked=false;
       this.fri_check=document.getElementById('vehicle64');
       this.fri_check.checked=false;
       this.sat_check=document.getElementById('vehicle74');
       this.sat_check.checked=false;
       this.sun_check=document.getElementById('vehicle84');
       this.sun_check.checked=false;
       this.mon_brunch=0;
       this.tue_brunch=0;
       this.wed_brunch=0;
       this.thu_brunch=0;
       this.fri_brunch=0;
       this.sat_brunch=0;
       this.sun_brunch=0;
      }
      else if(this.v==1){
        this.v=2;
        this.storevalue.length=0;
        this.storevalue.push({
         "coverurl": v3,
         "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
         "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":v1,
         "end_time":v2,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

       });
       console.log(this.storevalue);
       this.success=0
       this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
         console.log(data);
         this.success=data;
         if(this.success.suc==1){
           this.myFunction();
           this.bkmenu=document.getElementById('laguna');
           this.bkmenu.checked=false;
           this.dinner_check='N';
           this.bkmenu=document.getElementById('url_dinner');
           this.bkmenu.value='';
           this.bkmenu=document.getElementById('url_dinnertop');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('url_dinnermenu');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('url_section');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('start_dinner');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('end_dinner');
             this.bkmenu.value='';
         }
       })
       this.mon_check=document.getElementById('vehicle14');
       this.mon_check.checked=false;
       this.mon_check=document.getElementById('vehicle24');
       this.mon_check.checked=false;
       this.tue_check=document.getElementById('vehicle34');
       this.tue_check.checked=false;
       this.wed_check=document.getElementById('vehicle44');
       this.wed_check.checked=false;
       this.thu_check=document.getElementById('vehicle54');
       this.thu_check.checked=false;
       this.fri_check=document.getElementById('vehicle64');
       this.fri_check.checked=false;
       this.sat_check=document.getElementById('vehicle74');
       this.sat_check.checked=false;
       this.sun_check=document.getElementById('vehicle84');
       this.sun_check.checked=false;
       this.mon_brunch=0;
       this.tue_brunch=0;
       this.wed_brunch=0;
       this.thu_brunch=0;
       this.fri_brunch=0;
       this.sat_brunch=0;
       this.sun_brunch=0;
      }
      else{
        //Snackbar
      }
    }
    else {
      this.v=3;
        this.storevalue.length=0;
        this.storevalue.push({
         "coverurl": v3,
         "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
         "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":v1,
         "end_time":v2,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

       });
       console.log(this.storevalue);
       this.success=0
       this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
         console.log(data);
         this.success=data;
         if(this.success.suc==1){
           this.myFunction();
           this.bkmenu=document.getElementById('laguna');
           this.bkmenu.checked=false;
           this.dinner_check='N';
           this.bkmenu=document.getElementById('url_dinner');
           this.bkmenu.value='';
           this.bkmenu=document.getElementById('url_dinnertop');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('url_dinnermenu');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('url_section');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('start_dinner');
             this.bkmenu.value='';
             this.bkmenu=document.getElementById('end_dinner');
             this.bkmenu.value='';
         }
       })
       this.mon_check=document.getElementById('vehicle14');
       this.mon_check.checked=false;
       this.mon_check=document.getElementById('vehicle24');
       this.mon_check.checked=false;
       this.tue_check=document.getElementById('vehicle34');
       this.tue_check.checked=false;
       this.wed_check=document.getElementById('vehicle44');
       this.wed_check.checked=false;
       this.thu_check=document.getElementById('vehicle54');
       this.thu_check.checked=false;
       this.fri_check=document.getElementById('vehicle64');
       this.fri_check.checked=false;
       this.sat_check=document.getElementById('vehicle74');
       this.sat_check.checked=false;
       this.sun_check=document.getElementById('vehicle84');
       this.sun_check.checked=false;
       this.mon_brunch=0;
       this.tue_brunch=0;
       this.wed_brunch=0;
       this.thu_brunch=0;
       this.fri_brunch=0;
       this.sat_brunch=0;
       this.sun_brunch=0;
    }

    
   
  }
  changetopImage(event: any) {

  }

  TOPIMAGECHECKED(event: any) {

  }
  changemenu(event: any) {

  }
  checkMENU(event: any) {

  }
  // For breakfastcoverimage
  Breakfast(event: any) {
    console.log(event.target.files[0].name);
    this.breakfastcoverimage = event.target.files[0];
    console.log(this.breakfastcoverimage);
    
    // this._data.submit_breakfast_menu_setup(this.breakfastcoverimage).subscribe(data=>{
    //   console.log(data);
    // })
   
  }
  
  // For breakfasttop image
  changeBreak(event: any) {
    console.log(event.target.files[0].name);
    this.breakfasttopimage = event.target.files[0];
    console.log(this.breakfastcoverimage);

  }
  //For breakfastmenuimage
  changeBreakmenubreak(event: any) {
    // console.log(event.target.files.length);
    var mul_img = new Array();
    for(let i =0; i < event.target.files.length; i++){
      // mul_img.push({'File':event.target.files[i]});
      mul_img.push(event.target.files[i]);
    
    }
    // console.log(mul_img);
    this.breakfastmenuimage = mul_img;
    // this.breakfastmenuimage = event.target.files;
    // console.log(this.breakfastmenuimage);
    this._data.submit_breakfast_menu(this.breakfastmenuimage).subscribe(data=>{
        console.log(data);
      })

  }
    // For breakfast section image
  changeBreakmenubreak1(event:any){
    this.breakfastsectionimage=event.target.files;
  }
   // Event of launch cover image

  changelaunchcoverpage(event: any) {
    console.log(event.target.files[0]);
    this.launchcoverimage = event.target.files[0];


  }
   // Event of launch top image

  changelaunchtopimage(event: any) {
    console.log(event.target.files[0]);
    this.launchtopimage = event.target.files[0];
  }
   // Event of launch menu image

  changelaunchtmenuimage(event: any) {
    console.log((event.target.files));
    this.launchmenuimage = event.target.files;

  }
   // Event of launch section image

  changelaunchsectionbreak1(event:any){
    console.log((event.target.files));
    this.launchsectionimage = event.target.files;
  }
   // Event of brunch section image
  changebrunchsectionbreak1(event:any){
    this.branchsectionimage=event.target.files;
  }
    // Event of brumch menu image
  changebrunchmenubreak1(event:any){
    this.branchmenuimage=event.target.files;
  }
    // Event of brunch top image
  brunchtopimage(event:any){
    this.branchtopimage=event.target.files[0];

  }
    // Event of brunch cover image
  brunchcoverimage(event:any){
        this.branchcoverimage=event.target.files[0];
  }
   // Event of dinner section image
  changedinnersectionimage(event:any){
     this.dinnersectionimage=event.target.files;
  }
    // Event of dinner cover image
  dinnerchangecoverimage(event:any){
    // dinnersectionimage:any;
  this.dinnercoverimage=event.target.diles[0];
 
  }
    // Event of dinner top image
  dinnerchangetopimage(event:any){
    this.dinnertopimage=event.target.files[0];
 
  }
  // Event of dinner menu image
  changedinnermenuimage(event:any){
    this.dinnermenuimage=event.target.files;
  }
  // For Breakfastmenu display day and time
  checkday(event:any,e:any){
    if(e=='monday'){
        this.mon_check=document.getElementById('vehicle2');

      if(event.target.checked){
        this.mon=2;
        console.log(this.mon);
      }
      else{
        this.mon=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    
    }
  else if(e=='tuesday'){
      
      console.log("this.mon");
      this.tue_check=document.getElementById('vehicle3');
      if(event.target.checked){
        this.tue=3;
      }
      else{
        this.tue=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     else if(e=='wednesday'){
 
      console.log(".mon");
      this.wed_check=document.getElementById('vehicle4');
      if(event.target.checked){
        this.wed=4;
      }
      else{
        this.wed=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     else if(e=='thursday'){
    
      console.log(".mon");
      this.thu_check=document.getElementById('vehicle5');
      if(event.target.checked){
        this.thu=5
      }
      else{
        this.thu=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
    else if(e=='friday'){
     
      console.log(".mon");
      this.fri_check=document.getElementById('vehicle6');
      if(event.target.checked){
        this.fri=6;
      }
      else{
        this.fri=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     else if(e=='sat'){
 
     console.log(".mon");
     this.sat_check=document.getElementById('vehicle7');
     if(event.target.checked){
      this.sat=7;
     }
     else{
       this.sat=0;
       this.every=document.getElementById('vehicle1');
       this.every.checked=false;
     }

    }
   else if(e=='sun'){
       
      console.log(".mon");
      this.sun_check=document.getElementById('vehicle8');
      if(event.target.checked){
               this.sun=8;
      }
      else{
        this.sun=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }

    }
   else if(e=='everyday'){
      this.every=document.getElementById('vehicle1');
      if(event.target.checked){
        console.log("asdsadad")
  
      this.mon_check=document.getElementById('vehicle2');
      this.mon_check.checked=true;
      this.tue_check=document.getElementById('vehicle3');
      this.tue_check.checked=true;
      this.wed_check=document.getElementById('vehicle4');
      this.wed_check.checked=true;
      this.thu_check=document.getElementById('vehicle5');
      this.thu_check.checked=true;
      this.fri_check=document.getElementById('vehicle6');
      this.fri_check.checked=true;
      this.sat_check=document.getElementById('vehicle7');
      this.sat_check.checked=true;
      this.sun_check=document.getElementById('vehicle8');
      this.sun_check.checked=true;
      this.mon=2;
      this.tue=3;
      this.wed=4;
      this.thu=5;
      this.fri=6;
      this.sat=7;
      this.sun=8
      }
       else{
        console.log("asdsadadfailed")
        this.mon_check=document.getElementById('vehicle2');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle3');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle4');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle5');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle6');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle7');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle8');
        this.sun_check.checked=false;
        this.mon=0;
        this.tue=0;
        this.wed=0;
        this.thu=0;
        this.fri=0;
        this.sat=0;
        this.sun=0;
       }

    }
   console.log(this.mon,this.tue,this.wed,this.thu,this.fri,this.sat,this.sun)
  }
//For Launch day time check
  checkeveday(event:any,e:any){
    
    if(e ==='monday'){
        this.mon_check=document.getElementById('vehicle22');

      if(event.target.checked){
        this.mon_launch=2;
        console.log(this.mon);
      }
      else{
        this.mon_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    
    }
  else if(e ==='tuesday'){
      
      console.log("this.mon");
      this.tue_check=document.getElementById('vehicle32');
      if(event.target.checked){
        this.tue_launch=3;
      }
      else{
        this.tue_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
     else if(e ==='wednesday'){
 
      console.log(".mon");
      this.wed_check=document.getElementById('vehicle42');
      if(event.target.checked){
        this.wed_launch=4;
      }
      else{
        this.wed_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
     else if(e==='thursday'){
    
      console.log(".mon");
      this.thu_check=document.getElementById('vehicle52');
      if(event.target.checked){
        this.thu_launch=5
      }
      else{
        this.thu_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
    else if(e==='friday'){
     
      console.log(".mon");
      this.fri_check=document.getElementById('vehicle62');
      if(event.target.checked){
        this.fri_launch=6;
      }
      else{
        this.fri_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
     else if(e==='sat'){
 
     console.log(".mon");
     this.sat_check=document.getElementById('vehicle72');
     if(event.target.checked){
      this.sat_launch=7;
     }
     else{
       this.sat_launch=0;
       this.every=document.getElementById('vehicle12');
       this.every.checked=false;
     }

    }
   else if(e==='sun'){
       
      console.log(".mon");
      this.sun_check=document.getElementById('vehicle82');
      if(event.target.checked){
               this.sun_launch=8;
      }
      else{
        this.sun_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }

    }
   else if(e ==='everyday'){
      this.every=document.getElementById('vehicle12');
      if(event.target.checked){
        console.log("asdsadad")
  
      this.mon_check=document.getElementById('vehicle22');
      this.mon_check.checked=true;
      this.tue_check=document.getElementById('vehicle32');
      this.tue_check.checked=true;
      this.wed_check=document.getElementById('vehicle42');
      this.wed_check.checked=true;
      this.thu_check=document.getElementById('vehicle52');
      this.thu_check.checked=true;
      this.fri_check=document.getElementById('vehicle62');
      this.fri_check.checked=true;
      this.sat_check=document.getElementById('vehicle72');
      this.sat_check.checked=true;
      this.sun_check=document.getElementById('vehicle82');
      this.sun_check.checked=true;
      this.mon_launch=2;
      this.tue_launch=3;
      this.wed_launch=4;
      this.thu_launch=5;
      this.fri_launch=6;
      this.sat_launch=7;
      this.sun_launch=8
      }
       else{
        console.log("asdsadadfailed")
        this.mon_check=document.getElementById('vehicle22');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle32');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle42');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle52');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle62');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle72');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle82');
        this.sun_check.checked=false;
        this.mon_launch=0;
        this.tue_launch=0;
        this.wed_launch=0;
        this.thu_launch=0;
        this.fri_launch=0;
        this.sat_launch=0;
        this.sun_launch=0;
       }

    }
   console.log(this.mon_launch,this.tue_launch,this.wed_launch,this.thu_launch,this.fri_launch,this.sat_launch,this.sun_launch)
  }


  checklaunch(event:any,e:any){
    if(e=='monday'){
        this.mon_check=document.getElementById('vehicle2');
      // this.mon_check.checked=true;
      if(this.mon_check.checked){
        this.mon=2;
        console.log(this.mon);
      }
      else{
        this.mon=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    
    }
 if(e=='tuesday'){
      
      console.log("this.mon");
      this.tue_check=document.getElementById('vehicle3');
      if(this.tue_check.checked){
        this.tue=3;
      }
      else{
        this.tue=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
    if(e=='wednesday'){
 
      console.log(".mon");
      this.wed_check=document.getElementById('vehicle4');
      if(this.wed_check.checked){
        this.wed=4;
      }
      else{
        this.wed=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     if(e=='thursday'){
    
      console.log(".mon");
      this.thu_check=document.getElementById('vehicle5');
      if(this.thu_check.checked){
        this.thu=5
      }
      else{
        this.thu=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
   if(e=='friday'){
     
      console.log(".mon");
      this.fri_check=document.getElementById('vehicle6');
      if(this.fri_check.checked){
        this.fri=6;
      }
      else{
        this.fri=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
    if(e=='sat'){
 
     console.log(".mon");
     this.sat_check=document.getElementById('vehicle7');
     if(this.sat_check.checked){
      this.sat=7;
     }
     else{
       this.sat=0;
       this.every=document.getElementById('vehicle1');
       this.every.checked=false;
     }

    }
  if(e=='sun'){
        this.sun=8
      console.log(".mon");
      this.sun_check=document.getElementById('vehicle8');
      if(this.sun_check.checked){
               this.sun=8;
      }
      else{
        this.sun=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }

    }
    if(e=='everyday'){
      this.every=document.getElementById('vehicle1');
      if(this.every.checked){

  
      this.mon_check=document.getElementById('vehicle2');
      this.mon_check.checked=true;
      this.tue_check=document.getElementById('vehicle3');
      this.tue_check.checked=true;
      this.wed_check=document.getElementById('vehicle4');
      this.wed_check.checked=true;
      this.thu_check=document.getElementById('vehicle5');
      this.thu_check.checked=true;
      this.fri_check=document.getElementById('vehicle6');
      this.fri_check.checked=true;
      this.sat_check=document.getElementById('vehicle7');
      this.sat_check.checked=true;
      this.sun_check=document.getElementById('vehicle8');
      this.sun_check.checked=true;
      this.mon=2;
      this.tue=3;
      this.wed=4;
      this.thu=5;
      this.fri=6;
      this.sat=7;
      this.sun=8
      }
       else{
        this.mon_check=document.getElementById('vehicle2');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle3');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle4');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle5');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle6');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle7');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle8');
        this.sun_check.checked=false;
        this.mon=0;
        this.tue=0;
        this.wed=0;
        this.thu=0;
        this.fri=0;
        this.sat=0;
        this.sun=0;
       }

    }
   console.log(this.mon,this.tue,this.wed,this.thu,this.fri,this.sat,this.sun)
  }
  //For dinner day and time
  checkdinnerday(event:any,e:any){
    if(e ==='monday'){
      this.mon_check=document.getElementById('vehicle23');

    if(event.target.checked){
      this.mon_dinner=2;
      console.log(this.mon);
    }
    else{
      this.mon_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  
  }
else if(e ==='tuesday'){
    
    console.log("this.mon");
    this.tue_check=document.getElementById('vehicle33');
    if(event.target.checked){
      this.tue_dinner=3;
    }
    else{
      this.tue_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
   else if(e ==='wednesday'){

    console.log(".mon");
    this.wed_check=document.getElementById('vehicle43');
    if(event.target.checked){
      this.wed_dinner=4;
    }
    else{
      this.wed_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
   else if(e==='thursday'){
  
    console.log(".mon");
    this.thu_check=document.getElementById('vehicle53');
    if(event.target.checked){
      this.thu_dinner=5
    }
    else{
      this.thu_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
  else if(e==='friday'){
   
    console.log(".mon");
    this.fri_check=document.getElementById('vehicle63');
    if(event.target.checked){
      this.fri_dinner=6;
    }
    else{
      this.fri_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
   else if(e==='sat'){

   console.log(".mon");
   this.sat_check=document.getElementById('vehicle73');
   if(event.target.checked){
    this.sat_dinner=7;
   }
   else{
     this.sat_dinner=0;
     this.every=document.getElementById('vehicle13');
     this.every.checked=false;
   }

  }
 else if(e==='sun'){
     
    console.log(".mon");
    this.sun_check=document.getElementById('vehicle83');
    if(event.target.checked){
             this.sun_dinner=8;
    }
    else{
      this.sun_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }

  }
 else if(e ==='everyday'){
    this.every=document.getElementById('vehicle13');
    if(event.target.checked){
      console.log("asdsadad")

    this.mon_check=document.getElementById('vehicle23');
    this.mon_check.checked=true;
    this.tue_check=document.getElementById('vehicle33');
    this.tue_check.checked=true;
    this.wed_check=document.getElementById('vehicle43');
    this.wed_check.checked=true;
    this.thu_check=document.getElementById('vehicle53');
    this.thu_check.checked=true;
    this.fri_check=document.getElementById('vehicle63');
    this.fri_check.checked=true;
    this.sat_check=document.getElementById('vehicle73');
    this.sat_check.checked=true;
    this.sun_check=document.getElementById('vehicle83');
    this.sun_check.checked=true;
    this.mon_dinner=2;
    this.tue_dinner=3;
    this.wed_dinner=4;
    this.thu_dinner=5;
    this.fri_dinner=6;
    this.sat_dinner=7;
    this.sun_dinner=8
    }
     else{
      console.log("asdsadadfailed")
      this.mon_check=document.getElementById('vehicle23');
      this.mon_check.checked=false;
      this.tue_check=document.getElementById('vehicle33');
      this.tue_check.checked=false;
      this.wed_check=document.getElementById('vehicle43');
      this.wed_check.checked=false;
      this.thu_check=document.getElementById('vehicle53');
      this.thu_check.checked=false;
      this.fri_check=document.getElementById('vehicle63');
      this.fri_check.checked=false;
      this.sat_check=document.getElementById('vehicle73');
      this.sat_check.checked=false;
      this.sun_check=document.getElementById('vehicle83');
      this.sun_check.checked=false;
      this.mon_dinner=0;
      this.tue_dinner=0;
      this.wed_dinner=0;
      this.thu_dinner=0;
      this.fri_dinner=0;
      this.sat_dinner=0;
      this.sun_dinner=0;
     }

  }
 console.log(this.mon_dinner,this.tue_dinner,this.wed_dinner,this.thu_dinner,this.fri_dinner,this.sat_dinner,this.sun_dinner)
  }
  //For brunch day and time
  checkbrucnhday(event:any,e:any){
    if(e ==='monday'){
      this.mon_check=document.getElementById('vehicle24');

    if(event.target.checked){
      this.mon_brunch=2;
      // console.log(this.mon);
    }
    else{
      this.mon_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  
  }
else if(e ==='tuesday'){
    
    console.log("this.mon");
    this.tue_check=document.getElementById('vehicle34');
    if(event.target.checked){
      this.tue_brunch=3;
    }
    else{
      this.tue_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
   else if(e ==='wednesday'){

    console.log(".mon");
    this.wed_check=document.getElementById('vehicle44');
    if(event.target.checked){
      this.wed_brunch=4;
    }
    else{
      this.wed_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
   else if(e==='thursday'){
  
    console.log(".mon");
    this.thu_check=document.getElementById('vehicle54');
    if(event.target.checked){
      this.thu_brunch=5
    }
    else{
      this.thu_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
  else if(e==='friday'){
   
    console.log(".mon");
    this.fri_check=document.getElementById('vehicle64');
    if(event.target.checked){
      this.fri_brunch=6;
    }
    else{
      this.fri_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
   else if(e==='sat'){

   console.log(".mon");
   this.sat_check=document.getElementById('vehicle74');
   if(event.target.checked){
    this.sat_brunch=7;
   }
   else{
     this.sat_brunch=0;
     this.every=document.getElementById('vehicle14');
     this.every.checked=false;
   }

  }
 else if(e==='sun'){
     
    console.log(".mon");
    this.sun_check=document.getElementById('vehicle84');
    if(event.target.checked){
             this.sun_brunch=8;
    }
    else{
      this.sun_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }

  }
 else if(e ==='everyday'){
    this.every=document.getElementById('vehicle14');
    if(event.target.checked){
      console.log("asdsadad")

    this.mon_check=document.getElementById('vehicle24');
    this.mon_check.checked=true;
    this.tue_check=document.getElementById('vehicle34');
    this.tue_check.checked=true;
    this.wed_check=document.getElementById('vehicle44');
    this.wed_check.checked=true;
    this.thu_check=document.getElementById('vehicle54');
    this.thu_check.checked=true;
    this.fri_check=document.getElementById('vehicle64');
    this.fri_check.checked=true;
    this.sat_check=document.getElementById('vehicle74');
    this.sat_check.checked=true;
    this.sun_check=document.getElementById('vehicle84');
    this.sun_check.checked=true;
    this.mon_brunch=2;
    this.tue_brunch=3;
    this.wed_brunch=4;
    this.thu_brunch=5;
    this.fri_brunch=6;
    this.sat_brunch=7;
    this.sun_brunch=8
    }
     else{
      console.log("asdsadadfailed")
      this.mon_check=document.getElementById('vehicle24');
      this.mon_check.checked=false;
      this.tue_check=document.getElementById('vehicle34');
      this.tue_check.checked=false;
      this.wed_check=document.getElementById('vehicle44');
      this.wed_check.checked=false;
      this.thu_check=document.getElementById('vehicle54');
      this.thu_check.checked=false;
      this.fri_check=document.getElementById('vehicle64');
      this.fri_check.checked=false;
      this.sat_check=document.getElementById('vehicle74');
      this.sat_check.checked=false;
      this.sun_check=document.getElementById('vehicle84');
      this.sun_check.checked=false;
      this.mon_brunch=0;
      this.tue_brunch=0;
      this.wed_brunch=0;
      this.thu_brunch=0;
      this.fri_brunch=0;
      this.sat_brunch=0;
      this.sun_brunch=0;
     }

  }
 console.log(this.mon_brunch,this.tue_brunch,this.wed_brunch,this.thu_brunch,this.fri_brunch,this.sat_brunch,this.sun_brunch)
  }

  // For  snackbar
  myFunction() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    this.x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
  } 
  //Previous button
  goprev(e:any){
    if(e=='paris'){
      this.tab1=false;
      this.tab2=true;
      this.tab3=true;
      this.tab4=true;
      this.paris = document.getElementById('London');
      this.paris.className = 'active';
    }
    else if(e=='tokyo'){
      this.tab1=true;
      this.tab2=false;
      this.tab3=true;
      this.tab4=true;
      this.paris = document.getElementById('Paris');
      this.paris.className = 'active';
    }
    else if(e=='laguna'){
      this.tab1=true;
      this.tab2=true;
      this.tab3=false;
      this.tab4=true;
      this.paris = document.getElementById('Tokyo');
      this.paris.className = 'active';
    }
  }

  // For Checking null
  checkvalidity(event:any){
    if(event.target.id=="url"){
        if(event.target.value==''){
          this.launch_url=true;
        }
        else{
          this.launch_url=false;
        }
    }
    else if(event.target.id=="url_top"){

    }
    else if(event.target.id=="url_menu"){
      
    }
    else if(event.target.id=="Url_section"){
      
    }
    else if(event.target.id=='start'){

    }
    else if(event.target.id=='end'){

    }
    
  }
}