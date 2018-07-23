import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

const httpParams = {
  headers: new HttpHeaders()
}
@Injectable()
export class ApiService {

  httpOptions: object = httpParams;

  constructor(
    private _http: HttpClient
  ) {}

  get(path): Observable<any> {
    let resultPath = path;

    return this._http
      .get(resultPath, this.httpOptions)
      .pipe(map(data =>{
        return data;
      }));
  }
}