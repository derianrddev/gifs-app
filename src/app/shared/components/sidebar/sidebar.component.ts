import { Component } from '@angular/core';

import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private gifsService: GifsService ) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchGifs(tag: string): void {
    console.log(tag);
    this.gifsService.searchTag(tag);
  }
}
