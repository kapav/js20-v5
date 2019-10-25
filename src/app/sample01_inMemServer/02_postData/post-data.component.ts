import {Component, OnInit} from '@angular/core'
import {HttpClient, HttpRequest} from '@angular/common/http'

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html'
})
export class PostDataComponent {

  id: number
  name: string
  itemArray: any[]

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('app/items').subscribe(
      result => this.itemArray = result,
      error => console.log(error.statusText)
    )
  }

  clickHandler() {
    this.httpClient.post('app/items', {
      id: this.id,
      name: this.name
    }).subscribe(
      result => {
        let json = result
        if (json) { this.itemArray.push(json) }
      },
      error => console.log(error.statusText)
    )
  }

}
