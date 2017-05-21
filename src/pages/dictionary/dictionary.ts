import { Component, Injectable } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html'
})

@Injectable()
export class DictionaryPage {

	selectedItem: any;
	dictionary = [];
	current_page: any;
	last_page: any;
	myInput : any;
	delay : any;

	constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public navParams: NavParams) {

		this.selectedItem = navParams.get('item');
		this.fetchData(true, false, 1, null, () => {})
	
	}

	fetchData(loading, reset, nextPage, data, cb){
		
		let url = 'http://app.toiran.com/api/v1/dictionary?';

		if(nextPage){
			url = url+"page="+nextPage
		}

		if(loading){

			var loader = this.loadingCtrl.create({
			  content: "Please wait...",		  
			});

			loader.present();

		}

		if(reset){
			this.dictionary = [];
		}

		if(data){
			if(nextPage){
				url = url+"page="+nextPage+"&query="+data.query
			}else{
				url = url+"query="+data.query
			}
		}

		this.http.get(url).map(res => res.json()).subscribe(data => {
		    
		    this.dictionary = this.dictionary.concat(data.data);
		    this.last_page = data.last_page;
		    this.current_page = data.current_page;

		    if(loading){
		    	loader.dismiss()
		    }

		    cb();
		});		
	}

	doRefresh(refresher) {
		this.fetchData(false, true, 1, null, ()=>{
			refresher.complete();
		})		 		
	}

	doInfinite(infiniteScroll) {

		this.fetchData(false, false, (this.current_page+1),null,()=>{
			infiniteScroll.complete();
		})

	}	

	itemTapped(event, item) {
		console.log(item)
		var audio = new Audio();
		audio.src = event.file_path;
		audio.load();
		audio.play();
	}	

	onInput(input){
		clearTimeout(this.delay);

		this.delay = setTimeout(() => {
			this.fetchData(true, true, 1, { query : this.myInput }, () => {})			
		}, 1000)
	}

	onCancel(event){

	}

	goBack(){
		this.navCtrl.pop();
	}
}
