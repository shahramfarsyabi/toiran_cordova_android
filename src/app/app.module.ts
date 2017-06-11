import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { DatePickerModule } from 'datepicker-ionic2';
import { DatePicker } from '@ionic-native/date-picker';
import { Calendar } from '@ionic-native/calendar';


import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CitiesPage } from '../pages/cities/cities';
import { HotelsPage } from '../pages/hotels/hotels';
import { CityPage } from '../pages/city/city';
import { BookingPage } from '../pages/booking/booking';
import { ToursPage } from '../pages/tours/tours';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { DictionaryPage } from '../pages/dictionary/dictionary';
import { EmbassiesPage } from '../pages/embassies/embassies';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    LoginPage,
    SignupPage,
    CitiesPage,
    HotelsPage,
    CityPage,
    BookingPage,
    ToursPage,
    RestaurantsPage,
    DictionaryPage,
    EmbassiesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    DatePickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    LoginPage,
    SignupPage,
    CitiesPage,
    HotelsPage,
    CityPage,
    TabsPage,
    BookingPage,
    RestaurantsPage,
    DictionaryPage,
    EmbassiesPage,
    ToursPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    GoogleMaps,
    SplashScreen,
    DatePicker,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
