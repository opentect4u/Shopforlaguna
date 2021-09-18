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
  resid:any=10;
  break_check:any;
  launch_check:any;
  brunch_check:any
  dinner_check:any
  storevalue: any = [];
  mon:any=0;;
  tue:any=0;
  wed:any=0;
  thu:any=0;
  fri:any=0;
  sat:any=0;
  sun:any=0;
  every:any;
  
  // mon:any;

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
    this.PACK = document.getElementById('London');
    this.PACK.className = 'active';
  }
  // openCity(e:any){
  //   console.log(e);


  // }

  openCity(e: any) {
    this.mon=0;;
    this.tue=0;
    this.wed=0;
    this.thu=0;
    this.fri=0;
    this.sat=0;
    this.sun=0;
    if (e == 'London') {
      // if (this.t1 != '') {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = true;
        this.tab5 = true;
        this.paris = document.getElementById('London');
        this.paris.className = 'active';
      // }
      // else {

      // }
      
    }
    else if (e == 'Paris') {
      // if (this.t2 != '') {
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = true;
        this.paris = document.getElementById('Paris');
        this.paris.className = 'active';
      // }
      // else {

      // }
    }
    else if (e == 'Tokyo') {
      // if (this.t3 != '') {
        this.tab1 = true;
        this.tab2 = true;
        this.tab3 = false;
        this.tab4 = true;
        this.paris = document.getElementById('Tokyo');
        this.paris.className = 'active';
      // }
      // else {

      // }
    }
    else if (e == 'Laguna') {
      // if (this.t4 != '') {
        this.tab1 = true;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = false;
        // this.tab5 = true;
        this.paris = document.getElementById('Laguna');
        this.paris.className = 'active';
      // }
      // else {

      // }
    }
    // else if (e == 'Shrewsbury') {
     
    //     this.tab1 = true;
    //     this.tab2 = true;
    //     this.tab3 = true;
    //     this.tab4 = true;
    //     this.tab5 = false;
    //     this.paris = document.getElementById('Shrewsbury');
    //     this.paris.className = 'active';
    
    // }

  }
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
    this.storevalue.length=0;
    this.storevalue.push({
      "coverurl": COVERPAGEURL,
      "topurl": TOPIMAGEURL,"MenuUrl":MENUURL,"SectionUrl":SECTIONURL,"restaurant_id":this.resid,
      "menu_id":hidevalue,
      "break_check":this.break_check,
      "start_time":v1,
      "end_time":v2,
      "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
    });
      
    // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe((data) => { console.log(data) })
    this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
      console.log(data);
    })
    console.log(this.storevalue);
    this.mon=0;;
    this.tue=0;
    this.wed=0;
    this.thu=0;
    this.fri=0;
    this.sat=0;
    this.sun=0;
    
    
   

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
  opennextab2(e: any,v1:any,v2:any,v3:any,v4:any,v5:any,v6:any,v7:any) {

    this.storevalue.length=0;
    this.storevalue.push({
          "coverurl": v4,
          "topurl": v3,"MenuUrl":v2,"SectionUrl":v1,
          "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.brunch_check,
          "start_time":v1,
      "end_time":v2,
      "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]

        });
        console.log(this.storevalue);
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
        })
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
  opennextab1(e: any, v1: any, v2: any,v4:any,v5:any,v6:any,v7:any,v8:any) {
  this.storevalue.length=0;
    this.storevalue.push({
          "coverurl": v1,
          "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
          "restaurant_id":this.resid,
          "menu_id":v6,
          "break_check":this.launch_check,
          "start_time":v1,
      "end_time":v2,
      "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]

        });
        console.log(this.storevalue);
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
        })

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
  opennextab3(e: any,v1:any,v2:any,v3:any,v4:any,v5:any,v6:any,v7:any) {
    this.storevalue.length=0;
    this.storevalue.push({
          "coverurl": v3,
          "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
          "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":v1,
          "end_time":v2,
          "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]

        });
        console.log(this.storevalue);
        this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
          console.log(data);
        })
    // this.storevalue.push({
    //   "coverimg": this.dinnercoverimage, "topimg": this.dinnertopimage, "menuimg": this.dinnermenuimage, "coverurl":v3 ,
    //   "topurl": v2,"launchmenuurl":v1,"sectionurle":v4,"launchsectionimage": this.dinnersectionimage
    // });
    // console.log(this.storevalue);
    // if (e == 'laguna') {
    //   console.log('Shrewsbury');
    //   this.t1 = 'London';
    //   this.t2 = 'Paris';
    //   this.t3 = 'Tokyo';
    //   this.t4 = 'Laguna';
    //   this.t5 = 'Shrewsbury';
    //   this.tab1 = true;
    //   this.tab2 = true;

    //   this.tab3 = true;
    //   this.tab4 = true;
    //   this.tab5 = false;
    //   this.paris = document.getElementById('Shrewsbury');
    //   this.paris.className = 'active';
    // }
  }
  changetopImage(event: any) {

  }

  TOPIMAGECHECKED(event: any) {

  }
  changemenu(event: any) {

  }
  checkMENU(event: any) {

  }
  Breakfast(event: any) {
    console.log(event.target.files[0].name);
    this.breakfastcoverimage = event.target.files[0];
    console.log(this.breakfastcoverimage);
    
    // this._data.submit_breakfast_menu_setup(this.breakfastcoverimage).subscribe(data=>{
    //   console.log(data);
    // })
   
  }
  changeBreak(event: any) {
    console.log(event.target.files[0].name);
    this.breakfasttopimage = event.target.files[0];
    console.log(this.breakfastcoverimage);

  }
  changeBreakmenubreak(event: any) {
    // console.log(event.target.files.length);
    var mul_img = new Array();
    for(let i =0; i < event.target.files.length; i++){
      mul_img.push(event.target.files[i]);
    }
    // console.log(mul_img);
    this.breakfastmenuimage = mul_img;
    // this.breakfastmenuimage = event.target.files;
    // console.log(this.breakfastmenuimage);

  }
  changeBreakmenubreak1(event:any){
    this.breakfastsectionimage=event.target.files;
  }
  changelaunchcoverpage(event: any) {
    console.log(event.target.files[0]);
    this.launchcoverimage = event.target.files[0];


  }
  changelaunchtopimage(event: any) {
    console.log(event.target.files[0]);
    this.launchtopimage = event.target.files[0];
  }
  changelaunchtmenuimage(event: any) {
    console.log((event.target.files));
    this.launchmenuimage = event.target.files;

  }
  changelaunchsectionbreak1(event:any){
    console.log((event.target.files));
    this.launchsectionimage = event.target.files;
  }

  changebrunchsectionbreak1(event:any){
    this.branchsectionimage=event.target.files;
  }
  changebrunchmenubreak1(event:any){
    this.branchmenuimage=event.target.files;
  }
  brunchtopimage(event:any){
    this.branchtopimage=event.target.files[0];

  }
  brunchcoverimage(event:any){
        this.branchcoverimage=event.target.files[0];
  }
 
  changedinnersectionimage(event:any){
     this.dinnersectionimage=event.target.files;
  }
  dinnerchangecoverimage(event:any){
    // dinnersectionimage:any;
  this.dinnercoverimage=event.target.diles[0];
 
  }
  dinnerchangetopimage(event:any){
    this.dinnertopimage=event.target.files[0];
 
  }
  changedinnermenuimage(event:any){
    this.dinnermenuimage=event.target.files;
  }
  // For Breakfastmenu display day and time
  checkday(event:any,e:any){
    if(e=='monday'){
        this.mon_check=document.getElementById('vehicle2');
      // this.mon_check.checked=true;
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
  if(e=='tuesday'){
      
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
     if(e=='wednesday'){
 
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
     if(e=='thursday'){
    
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
    if(e=='friday'){
     
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
     if(e=='sat'){
 
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
   if(e=='sun'){
       
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
   if(e=='everyday'){
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
}