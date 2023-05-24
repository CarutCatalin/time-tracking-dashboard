import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {  Activities } from '../activities-model/activities-model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private activities = 'assets/data.json'

  constructor(private http: HttpClient) { }

  getActData(): Observable<Activities[]> {
    return this.http.get<Activities[]>(this.activities);
  }

}
