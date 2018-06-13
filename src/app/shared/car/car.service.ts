import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public API = 'https://sn-heroku-spring-boot-boiler.herokuapp.com';
  public CAR_API = this.API + '/cars';
  public COOL_CARS_API = this.API + '/cool-cars';

  constructor(private http:HttpClient) { }

  getAll() : Observable<any> {
    return this.http.get(COOL_CARS_API);
  }

  get(id : string) {
    return this.http.get(this.CAR_API + "/" + id)
  }

  save(car : any): Observable<any> {
    let result: Observable<Object>;
    if (car['href']) {
      result = this.http.put(car.href, car);
    } else {
      result = this.http.post(this.CAR_API, car);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
