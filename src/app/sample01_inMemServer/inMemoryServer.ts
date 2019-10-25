import {InMemoryDbService} from 'angular-in-memory-web-api'

export class ItemData implements InMemoryDbService {
  createDb() {
    let items = [
      { id: 1, name: 'Пункт 1' },
      { id: 2, name: 'Пункт 2' },
      { id: 3, name: 'Пункт 3' },
      { id: 4, name: 'Пункт 4' }
    ]
    return { items }
  }
}
