import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import {global} from '../global/global';

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {
name;
details;
results
  constructor(public navCtrl: NavController,private navParams: NavParams) {
    this.name=navParams.get('name');
    this.list_value();
  }
list_value(){
  if(localStorage.getItem('setvalue')!=null)
  {
      global.PROJECT_ARRAY= JSON.parse(localStorage.getItem('setvalue'));
 }
  this.details={Name:this.name};
  global.PROJECT_ARRAY.push(this.details);
  localStorage.setItem("setvalue",JSON.stringify(global.PROJECT_ARRAY));
  this.results=global.PROJECT_ARRAY;
}
  

}
