import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Category } from '../../core/models/category';

@Injectable()
export class CategoriesService {

  BASE_URL: string = 'http://demo9151850.mockable.io';
  constructor(private http: Http) {}

  // Fetch all Categories
  getCategories(): Observable<Category[]> {

      return this.http.get(this.BASE_URL + '/categories')
                      // calling .json() on the response to return data
                      .map((res: Response) => res.json())
                      // errors if any
                      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
