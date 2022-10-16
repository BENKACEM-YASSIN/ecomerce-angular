import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';

const routes: Routes = [


  // dont hav time to change sturcture to generate childs
  { 
    path: '', 
    component: ProductListComponent ,
  },
  { path: 'login', 
    component: LoginComponent 
  },
  { path: 'product-detail/:id', 
    component: ProductDetailsComponent ,
    
  },
  { path: 'shoping-card', 
    component: ShopingCartComponent ,
    canActivate: [AuthGuardGuard],
    data:{}
  },
  { path: 'payment', 
    component: PaymentsComponent ,
    canActivate: [AuthGuardGuard],
  },
  { path: 'order-completed', 
    component: OrderCompletedComponent ,
    canActivate: [AuthGuardGuard],
  },
  { path: 'blog', 
    component: BlogComponent ,
  },
  { path: 'about-us', 
    component: AboutUsComponent ,
  },


  { path: 'auth', loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule) },
  { path: '**', 
    component: NotFoundComponent ,
  },
  // { 
  //   path: 'about-us', 
  //   component: AboutUsComponent 
  // },
  // { path: 
  //   'product/:id', 
  //   component: ProductItemComponent 
  // },
  // { path: 
  //   'test', 
  //   component: TestComponent 
  // },
 
  // {
  //   path: 'profil',
  //   loadChildren : ()=> import('src/app/profil/profil.module').then(m => m.ProfilModule)
  // },
  // { path: 
  //   '**', 
  //   component: PageNotFoundComponent 
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



