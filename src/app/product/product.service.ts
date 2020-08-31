import { Injectable } from '@angular/core';
import { products } from './product.modal';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private products:products[]=[
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
  ];
  constructor() { }

  getAllProduct(){
    return [...this.products];
  }

  getProduct(proid:string){
    return{
      ...this.products.find(product=>{
        return product.id === proid;
      }),
    };
  }

  deleteproduct(proid:string){
   this.products= this.products.filter(products=>{
      return products.id !== proid;
    });
  }
}
