import { Component, OnInit, Input } from '@angular/core';
import { products } from '../product.modal';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() p: products;

  constructor() { }

  ngOnInit() {}

}
