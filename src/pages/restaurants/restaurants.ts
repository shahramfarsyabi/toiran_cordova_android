import { Component, Injectable } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html'
})

@Injectable()
export class RestaurantsPage {

	selectedItem: any;
	restaurants = [];
	current_page: any;
	last_page: any;

	constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public navParams: NavParams) {

		this.selectedItem = navParams.get('item');
		this.fetchData(true, false, 1, () => {})
	
	}

	fetchData(loading, reset, nextPage, cb){
		
		let url = 'http://app.toiran.com/api/v1/cities/1/restaurants?lang_id=1';

		if(nextPage){
			url = url+"&page="+nextPage
		}

		if(loading){

			var loader = this.loadingCtrl.create({
			  content: "Please wait...",		  
			});

			loader.present();

		}

		if(reset){
			this.restaurants = [];
		}
		this.http.get(url).map(res => res.json()).subscribe(data => {
		    
		    this.restaurants = this.restaurants.concat(data.data);
		    this.last_page = data.last_page;
		    this.current_page = data.current_page;

		    if(loading){
		    	loader.dismiss()
		    }

		    cb();
		});		
	}

	doRefresh(refresher) {
		this.fetchData(false, true, 1, ()=>{
			refresher.complete();
		})		 		
	}

	doInfinite(infiniteScroll) {

		this.fetchData(false, false, (this.current_page+1), ()=>{
			infiniteScroll.complete();
		})

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
