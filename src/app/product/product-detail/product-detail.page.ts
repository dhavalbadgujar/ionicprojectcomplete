import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { products } from '../product.modal';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  loadproduct:products;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private router:Router ,
    private altctr:AlertController
    )     { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('proid')){
        this.router.navigate(['product']);
        return;
      }
      const proid=paramMap.get('proid');
     // this.productService.getProduct(proid);
     this.loadproduct= this.productService.getProduct(proid);

     if(!this.loadproduct.id){
      this.router.navigate(['product']); 
     }

    });
  }

  async onDeleteClick(){
    //console.log("asguy");

  const alert = await this.altctr.create({
      header:'Are you sure ? ',
      message:"Are you sure to delete the product ?",
      buttons:[
        {
          text:'Cancel',
          role:'cancle'
        },
        {
          text:'Delete',
          handler:() =>{
            this.productService.deleteproduct(this.loadproduct.id);
             this.router.navigate(['product']);
          }
        }
      ]

    });

    await alert.present();

   /* this.productService.deleteproduct(this.loadproduct.id);
    this.router.navigate(['product']); */
  }

}
