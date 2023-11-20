import { Component } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fresh-meat';
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
