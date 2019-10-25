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

import {ItemData} from './sample01_inMemServer/inMemoryServer'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GetRequestComponent,
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ItemData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
