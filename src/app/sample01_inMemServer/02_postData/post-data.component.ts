import {Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html'
})
export class PostDataComponent implements OnInit {

  id: number
  name: string
  itemArray: any[]

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<any[]>('app/items').subscribe(
      result => this.itemArray = result,
      error => console.log(error.statusText)
    )
  }

  clickHandler() {
    this.httpClient.post('app/items', {
      id: +this.id,
      name: this.name
    }).subscribe(
      result => {
        console.log(result)
        if (result) { this.itemArray.push(result) }
      },
      error => console.log(error.statusText)
    )
  }

}
