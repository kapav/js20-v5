import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import { AppComponent } from './app.component';
import {HomePageComponent} from './home-page/home-page.component'
import {GetRequestComponent} from './sample01_inMemServer/01_getRequest/get-request.component'
import {PostDataComponent} from './sample01_inMemServer/02_postData/post-data.component'
import {RequestOptionsComponent} from './sample01_inMemServer/03_requestOptions/request-options.component'
import {SearchParamsComponent} from './sample01_inMemServer/04_searchParams/search-params.component'

import {ItemData} from './sample01_inMemServer/inMemoryServer'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GetRequestComponent,
    PostDataComponent,
    RequestOptionsComponent,
    SearchParamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ItemData, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
