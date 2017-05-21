import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private datePicker: DatePicker, private calendar: Calendar) {
  	this.datePicker = datePicker;
  	this.calendar = calendar;
  	// this.show();
	// this.calendar.createCalendar('MyCalendar').then(
	  // (msg) => { console.log(msg); },
	  // (err) => { console.log(err); }
	// );  	
  }

  show(){
  	alert("test")
	this.datePicker.show({
	  date: new Date(),
	  mode: 'date',
	  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
	}).then(
	  date => console.log('Got date: ', date),
	  err => console.log('Error occurred while getting date: ', err)
	);  
  }


  setDate(event){
  	console.log(event)
  }

}
