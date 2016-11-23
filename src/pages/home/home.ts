import { Component } from '@angular/core';
import {ListsPage} from '../lists/lists';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
name;
  constructor(public navCtrl: NavController) {

    
  }
  btn_click(){
    this.navCtrl.push(ListsPage,{name:this.name});
  }

}
