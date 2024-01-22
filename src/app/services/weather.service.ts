import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

  private apiUrlForeCast = 'https://api.openweathermap.org/data/2.5';

  private apiKey = 'd4594364698122bfd1c4b3eb5f2ff19f';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey);

    return this.http.get(this.apiUrl, { params });
  }


  getForecast(city: string): Observable<any> {
    const url = `${this.apiUrlForeCast}/forecast?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
