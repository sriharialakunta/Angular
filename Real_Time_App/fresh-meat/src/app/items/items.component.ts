import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  title = 'fresh-meat-items';
  items! : Item[];

  constructor(private itemService: ItemService, private titleSer: Title) {
    titleSer.setTitle(this.title);
  }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }
}
