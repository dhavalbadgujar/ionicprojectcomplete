import { Component, OnInit } from '@angular/core';
import { products } from './product.modal';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  products:products[];
 /*products:products[]=[
   {
     id:'p1',
     title:'Product1',
     imgpath:'https://homepages.cae.wisc.edu/~ece533/images/watch.png',
     data:['d1','d2','d3'],
   },
   {
    id:'p2',
    title:'Product2',
    imgpath:'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
    data:['d21','d22','d23'],
  },
  {
    id:'p3',
    title:'Product3',
    imgpath:'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
    data:['d31','d32','d33'],
  }
 ];*/

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products=this.productService.getAllProduct();
  }

  ionViewWillEnter(){
    this.products=this.productService.getAllProduct();
  }

}
