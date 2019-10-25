import {Component} from '@angular/core'
import {HttpClient} from '@angular/common/http'

// Примеры из папки sample01_inMemoryServer используют
// angular2-in-memory-web-api чтобы тестировать приложение
// обрабатывая http запросы без реального сервера.
// Настройка angular2-in-memory-web-api происходит в
// app.module. Логика серверной стороны находится в файле
// inMemoryServer.ts.

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html'
})
export class GetRequestComponent {

  itemArray: any[]

  constructor(private httpClient: HttpClient ) {}

  clickHandler() {
    // this.http.get - отправка get запроса по указанному
    // адресу. метод возвращает объект Observable из
    // библиотеки RxJS. С помощью метода subscribe
    // подписываемся на событие. Событие произойдёт после
    // получения ответа от сервера.
    this.httpClient.get('app/items').subscribe(
      result => {
        console.log(result)
        this.itemArray = result
      },
      error => console.log(error.statusText)
    )
  }

}
