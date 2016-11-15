import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'barrat-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
      this.productService.getProducts()
      .subscribe(
          data => {
           this.products = data;
          }
     );
  }

}
