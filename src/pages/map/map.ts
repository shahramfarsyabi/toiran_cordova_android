import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 // MarkerOptions,
 // Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {

	constructor(private googleMaps: GoogleMaps, public navCtrl: NavController,private platform: Platform, private geolocation: Geolocation) {

		platform.ready().then(() => {

	      // get current position
	      geolocation.getCurrentPosition().then(pos => {
	        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
	      });

	      const watch = geolocation.watchPosition().subscribe(pos => {
	      	alert(pos.coords.latitude+":"+pos.coords.longitude)
	        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
	      });

	      // to stop watching
	      watch.unsubscribe();

	    });
	
	}

	goBack(){
		this.navCtrl.pop();
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.loadMap();
		}, 500)
	}
	
	loadMap() {
	 // make sure to create following structure in your view.html file
	 // and add a height (for example 100%) to it, else the map won't be visible
	 // <ion-content>
	 //  <div #map id="map" style="height:100%;"></div>
	 // </ion-content>

	 // create a new map by passing HTMLElement
	 let element: HTMLElement = document.getElementById('mapD');

	 let mapD: GoogleMap = this.googleMaps.create(element);

	 // listen to MAP_READY event
	 // You must wait for this event to fire before adding something to the map or modifying it in anyway
	 mapD.one(GoogleMapsEvent.MAP_READY).then(
	   () => {
	     console.log('Map is ready!');
	     // Now you can add elements to the map like the marker
	   }
	 );

	 // create LatLng object
	 let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

	 // create CameraPosition
	 let position: CameraPosition = {
	   target: ionic,
	   zoom: 18,
	   tilt: 30
	 };

	 // move the map's camera to position
	 mapD.moveCamera(position);

	 // create new marker
	 //let markerOptions: MarkerOptions = {
	 //  position: ionic,
	 //  title: 'Ionic'
	 //};


	}

}
