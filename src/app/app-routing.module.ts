import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },
  {
    path: 'product',
    children:[
      {
        path:'',
        loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
      },
      {
        path:':proid',
        loadChildren: () => import('./product/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
      }
    ]
   
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
