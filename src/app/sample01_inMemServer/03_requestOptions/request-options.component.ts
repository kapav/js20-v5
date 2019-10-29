import {Component, OnInit} from '@angular/core'
import {HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-request-options',
  templateUrl: './request-options.component.html'
})
export class RequestOptionsComponent implements OnInit {

  url: string = 'app/items'
  id: number
  name: string
  itemArray: any

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.url).subscribe(
      result => this.itemArray = result,
      error => console.log(error.statusText)
    )
  }

  clickHandler() {
    // определение пользовательских заголовков
    let myHttpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "X-MyHeader": "Здравствуй, Вселенная!"
    })
    // создание опций для запроса (не используется)
    let options = new HttpRequest('GET', this.url, {
      headers: myHttpHeaders
    })
    // создание объекта для отправки на сервер
    let data = {
      id: +this.id,
      name: this.name
    }
    // post-запроса с указанием адреса, данных и опций
    // для того чтобы увидеть данные запроса в Developer Tools
    // во вкладке Network закомментируйте строку импорта и
    // настройки модуля HttpClientInMemoryWebApiModule в
    // root module
    this.httpClient.post(this.url, data, {
      headers: myHttpHeaders
    }).subscribe(
      result => {
        if (result) { this.itemArray.push(result) }
      },
      error => console.log(error)
    )
  }

}
