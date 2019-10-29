import {Component, OnInit} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

@Component({
  selector: 'app-search-params',
  templateUrl: './search-params.component.html'
})
export class SearchParamsComponent implements OnInit {

  url: string

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    let params = new HttpParams()
    params.set('a', '2')
    params.set('b', 'value')

    // метод get с параметром search будет выполнять запрос
    // по следующему адресу
    // http://localhost:3000/app/items?a=1&b=value
    // для того чтобы увидеть запрос в браузере
    // закомментируйте настройку
    // HttpClientInMemoryWebApiModule
    this.httpClient.get(this.url, {
      params: params
    }).subscribe(
      response => console.log('Успешно.'),
      error => console.log('Ошибка.')
    )
  }

}
