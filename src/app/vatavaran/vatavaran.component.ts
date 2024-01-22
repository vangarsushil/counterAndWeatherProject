import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgxSpinnerService } from 'ngx-spinner';

import { WeatherService } from '../services/weather.service';

interface CityWeather {
  name: string;
  temperature: number;
  weatherStatus: string;
}

@Component({
  selector: 'app-vatavaran',
  templateUrl: './vatavaran.component.html',
  styleUrls: ['./vatavaran.component.css'],

})
export class VatavaranComponent implements OnInit {

  cityName = '';
  errorMessage = '';
  recentLocations: CityWeather[] = [];
  responseData: any;
  forecastData: any;

  constructor(
    private weatherService: WeatherService,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {

  }

  addCity() {
    this.spinner.show();
    this.weatherService.getWeather(this.cityName)
      .subscribe(
        data => {
          // console.log(data);
          this.getForeCast();
          const cityWeather: CityWeather = {
            name: data.name,
            temperature: data.main.temp,
            weatherStatus: data.weather[0].description
          };

          this.responseData = data;

          this.recentLocations.unshift(cityWeather);

          if (this.recentLocations.length > 8) {
            this.recentLocations.pop();
            this.snackBar.open("Limit reached, bottom city removed", 'close', {
              duration: 2000,
            });
          }

          // Reset input and error message
          this.cityName = '';
          this.errorMessage = '';

          this.spinner.hide();
        },
        error => {
          this.spinner.hide();
          console.error(error);
          this.snackBar.open('Invalid city name. Please try again.', 'close', {
            duration: 2000,
          });
          // this.errorMessage = 'Invalid city. Please try again.';
        }
      );
  }

  removeCity(index: number) {
    this.recentLocations.splice(index, 1);
  }

  refreshCity(city: any) {
    this.cityName = city.name;
    this.addCity();
  }

  clearCity() {
    this.recentLocations = [];
  }


  getForeCast() {
    this.weatherService.getForecast(this.cityName).subscribe((data) => {
      // console.log("Received data from getForecast:", data);

      this.forecastData = data.list.filter((value, i) => {
        return i === 0 || i === 8 || i === 13 || i === 21 || i === 29;
      });

      // console.log("forecastData : ", this.forecastData);
    });

  }

}
