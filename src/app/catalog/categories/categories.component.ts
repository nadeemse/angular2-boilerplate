import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../categories.service';

@Component({
  selector: 'barrat-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];
  constructor(private catService: CategoriesService) { }

  ngOnInit() {
      this.catService.getCategories()
      .subscribe(
          data => {
           this.categories = data;
          }
     );
  }

}
