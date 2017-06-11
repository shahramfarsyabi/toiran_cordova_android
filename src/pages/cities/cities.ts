import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-cities',
	templateUrl: 'cities.html'
})
export class CitiesPage {

	constructor(public navCtrl: NavController) {

	}

	goBack(){
		this.navCtrl.pop();
	}
}