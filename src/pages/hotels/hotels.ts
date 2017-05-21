import { Component, Injectable } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})

@Injectable()
export class HotelsPage {

	selectedItem: any;
	hotels: string[];

	constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public navParams: NavParams) {

		this.selectedItem = navParams.get('item');

		var loader = this.loadingCtrl.create({
		  content: "Please wait...",		  
		});

		loader.present();

		this.http.get('http://app.toiran.com/api/v1/cities/1/hotels?lang_id=1').map(res => res.json()).subscribe(data => {
		    this.hotels = data.data;
		    loader.dismiss()
		});		
	}

	itemTapped(event, item) {
	    this.navCtrl.push(LoginPage, {
	      item: item
	    });
	}	

	goBack(){
		this.navCtrl.pop();
	}
}
