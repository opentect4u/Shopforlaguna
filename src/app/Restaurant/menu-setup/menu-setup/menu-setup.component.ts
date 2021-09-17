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
  storevalue: any = [];

  breakfastcoverimage: any;
  breakfasttopimage: any;
  breakfastmenuimage: any;
  launchcoverimage: any;
  launchtopimage: any;
  launchmenuimage: any;


  constructor(private _data: DataserviceService) { }

  ngOnInit(): void {
    this.PACK = document.getElementById('London');
    this.PACK.className = 'active';
  }
  // openCity(e:any){
  //   console.log(e);


  // }

  openCity(e: any) {
    if (e == 'London') {
      if (this.t1 != '') {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = true;
        this.tab5 = true;
        this.paris = document.getElementById('London');
        this.paris.className = 'active';
      }
      else {

      }
    }
    else if (e == 'Paris') {
      if (this.t2 != '') {
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = true;
        this.paris = document.getElementById('Paris');
        this.paris.className = 'active';
      }
      else {

      }
    }
    else if (e == 'Tokyo') {
      if (this.t3 != '') {
        this.tab1 = true;
        this.tab2 = true;
        this.tab3 = false;
        this.tab4 = true;
        this.paris = document.getElementById('Tokyo');
        this.paris.className = 'active';
      }
      else {

      }
    }
    else if (e == 'Laguna') {
      if (this.t4 != '') {
        this.tab1 = true;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = false;
        this.paris = document.getElementById('Laguna');
        this.paris.className = 'active';
      }
      else {

      }
    }
    else if (e == 'Shrewsbury') {
      if (this.t5 != '') {
        this.tab1 = true;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = true;
        this.tab5 = false;
        this.paris = document.getElementById('Shrewsbury');
        this.paris.className = 'active';
      }
      else {

      }
    }

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
  opennextab(COVERPAGEURL: any, TOPIMAGEURL: any, MENUURL: any) {

    this.storevalue.push({
      "coverimg": this.breakfastcoverimage, "topimg": this.breakfasttopimage, "menuimg": this.breakfastmenuimage, "coverurl": COVERPAGEURL,
      "topurl": TOPIMAGEURL, "menuurl": MENUURL
    });
    this._data.submit_breakfast_menu_setup(this.storevalue).subscribe((data) => { console.log(data) })
    console.log(this.storevalue);
    // console.log(this.breakfastcoverimage);
    // console.log(this.breakfasttopimage);
    // console.log(this.breakfastmenuimage);

    console.log(COVERPAGEURL + TOPIMAGEURL + "" + MENUURL);
    this.t1 = 'London';
    this.t2 = 'Paris';
    this.tab2 = false;
    this.tab1 = true;
    this.tab3 = true;
    this.tab4 = true;
    this.paris = document.getElementById('Paris');
    this.paris.className = 'active';


  }
  opennextab2(e: any) {
    if (e == 'Tokyo') {
      this.t1 = 'London';
      this.t2 = 'Paris';
      this.t3 = 'Tokyo';
      this.t4 = 'Laguna';
      this.tab1 = true;
      this.tab2 = true;

      this.tab3 = true;
      this.tab4 = false;
      this.paris = document.getElementById('Laguna');
      this.paris.className = 'active';
    }
  }
  opennextab1(e: any, v1: any, v2: any, v3: any) {
    if (e == 'Paris') {
      this.storevalue.length = 0;
      this.storevalue.push({
        "coverimg": this.launchcoverimage, "topimg": this.launchtopimage, "menuimg": this.launchmenuimage, "coverurl": v1,
        "topurl": v2, "menuurl": v3
      });
      console.log(this.storevalue);
      this.t1 = 'London';
      this.t2 = 'Paris';
      this.t3 = 'Tokyo';
      this.tab1 = true;
      this.tab2 = true;

      this.tab3 = false;
      this.tab4 = true;
      this.paris = document.getElementById('Tokyo');
      this.paris.className = 'active';
    }
  }
  opennextab3(e: any) {
    if (e == 'laguna') {
      console.log('Shrewsbury');
      this.t1 = 'London';
      this.t2 = 'Paris';
      this.t3 = 'Tokyo';
      this.t4 = 'Laguna';
      this.t5 = 'Shrewsbury';
      this.tab1 = true;
      this.tab2 = true;

      this.tab3 = true;
      this.tab4 = true;
      this.tab5 = false;
      this.paris = document.getElementById('Shrewsbury');
      this.paris.className = 'active';
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
  Breakfast(event: any) {
    console.log(event.target.files[0].name);
    this.breakfastcoverimage = event.target.files[0];
  }
  changeBreak(event: any) {
    console.log(event.target.files[0].name);
    this.breakfasttopimage = event.target.files[0];
    console.log(this.breakfastcoverimage);

  }
  changeBreakmenubreak(event: any) {
    console.log(event.target.files[0].name);
    this.breakfastmenuimage = event.target.files[0];

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
    console.log((event.target.files[0]));
    this.launchmenuimage = event.target.files[0];

  }

}