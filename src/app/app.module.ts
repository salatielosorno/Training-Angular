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

const appRoutes: Routes = [
  /*{
    path : '',
    component: HomePageComponent
  },*/
  {
    path: 'search',
    component: GitSearchComponent,
    data: {
      title: 'Git Search'
    }
  }/*,
  { 
    path: '**', component: NotFoundComponent
  }*/
]

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent
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
