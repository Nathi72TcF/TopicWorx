import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopicWorxService {
  private jsonUrl = 'assets/covid.json'; // JSON file path

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
