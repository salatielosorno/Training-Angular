import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
//
import { GitSearchService } from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';

//It's necesary to be able use ngModel
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path : '',
    component: HomePageComponent
  },
  {
    path: 'search',
    redirectTo: '/search/angular',
    pathMatch: 'full'
    /*component: GitSearchComponent,
    data: {
      title: 'Git Search'
    }*/
  },
  {
    path: 'search/:query',
    component: GitSearchComponent,
    data: { title: 'Git Search' }
  },
  { 
    path: '**', component: NotFoundComponent
  }

  //Route Parameters 
  //Example:
  /*
  {
    path: '', redirectTo: 'all-products', pathMatch: 'full'
  },
  { path: 'all-products', component: ProductList },
  { path: 'products-details/:id', component: ProductDetails }
  */
]

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
