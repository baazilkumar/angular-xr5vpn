import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs";

@Injectable()
export class ServicesService {

  // private _postsURL = "http://api.opennotify.org/astros.json";

  constructor(private http: HttpClient) {

    this.getJSON().subscribe(data => {
      console.log(data)
    });
    
    
  }

  public getJSON(): Observable<any> { 
      return this.http.get("http://api.opennotify.org/astros.json")
  }

  // getPosts(): Observable<iposts[]> {
  //        return this.http
  //            .get(this._postsURL)
  //            .map((response: Response) => {
  //                return <iposts[]>response.json();
  //            })
  //            .catch(this.handleError);
  //    }
 
  //    private handleError(error: Response) {
  //        return Observable.throw(error.statusText);
  //    }
}