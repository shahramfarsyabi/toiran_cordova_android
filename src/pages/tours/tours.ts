import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Slides } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-tours',
  templateUrl: 'tours.html'
})
export class ToursPage {

  @ViewChild(Slides) slides: Slides;
  tours: string[];
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http) {

    var loader = this.loadingCtrl.create({
      content: "Please wait...",      
    });

    loader.present();

    this.http.get('http://app.toiran.com/api/v1/cities/1/hotels?lang_id=1').map(res => res.json()).subscribe(data => {
        this.tours = data.data;
        loader.dismiss()
    }); 

  }

  goToPrevSlide() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex){
      //this.slides.slideTo(--currentIndex, 500);
    }

    this.slides.slidePrev(500);
  }

  goToNextSlide() {
    this.slides.slideNext(500);
  }

}
