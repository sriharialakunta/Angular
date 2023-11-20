import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  constructor() { }
  createDb() {
    const items = [
      {id: 1, itemName: 'Chicken', location: 'Bangalore', cost: 453, mobile: '9867512345'},
      {id: 2, itemName: 'Mutton', location: 'Chennai', cost: 666, mobile: '7867534521'},
      {id: 3, itemName: 'Beef', location: 'Pune', cost: 553, mobile: '9975287450'},
      {id: 4, itemName: 'Chicken Leg Pices', location: 'Pune', cost: 431, mobile: '9975287450'},
      {id: 5, itemName: 'Goat Head', location: 'Pune', cost: 777, mobile: '9975287450'},
      {id: 6, itemName: 'Goat Blood', location: 'Pune', cost: 432, mobile: '9975287450'}
    ];
    return {items};
  }

  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 11;
  }
}
