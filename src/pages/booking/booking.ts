import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})

export class BookingPage {

	constructor(public navCtrl: NavController,private platform: Platform) {
		console.log(Platform)
	}

	public event = {
		month: '1990-02-19',
		timeStarts: '07:43',
		timeEnds: '1990-02-20'
	}

	public controller = function (){
		alert("")
	}

	goBack(){
		this.navCtrl.pop();
	}

}
