import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HotelsPage } from '../hotels/hotels';
import { CityPage } from '../city/city';
import { BookingPage } from '../booking/booking';
import { ToursPage } from '../tours/tours';
import { LoginPage } from  '../login/login';
import { SignupPage } from  '../signup/signup';
import { CitiesPage } from  '../cities/cities';
import { RestaurantsPage } from  '../restaurants/restaurants';
import { DictionaryPage } from '../dictionary/dictionary';
import { EmbassiesPage } from '../embassies/embassies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openPage(page){
  	
  	switch(page){

      case "EmbassiesPage":
        this.navCtrl.push(EmbassiesPage);        
        break;
      case "DictionaryPage":
        this.navCtrl.push(DictionaryPage);        
        break;

      case "LoginPage":
        this.navCtrl.push(LoginPage);
        break;

      case "SignupPage":
        this.navCtrl.push(SignupPage);
        break;

      case "CitiesPage":
        this.navCtrl.push(CitiesPage);
        break;

      case "RestaurantsPage":
        this.navCtrl.push(RestaurantsPage);
        break;

  		case "HotelsPage":
			  this.navCtrl.push(HotelsPage);
  			break;

  		case "CityPage":
        this.navCtrl.push(CityPage);
  			break;

      case "BookingPage":
        this.navCtrl.push(BookingPage);
        break;

      case "ToursPage":
        this.navCtrl.push(ToursPage);
        break;

  	}

  }

}
