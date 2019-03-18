import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

export interface IResponse {
  count: number;
  results: Array<any>;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  isLoading: boolean;
  response: IResponse;
  characters: Array<any> = [];
  page = 1;
  next: boolean;
  totalPages: Array<number>;
  totalPagesEmpty: any;

  constructor(private characterService: CharactersService) {
  }

  ngOnInit() {
    this.loadCharactersByPage();
  }

  pageChanged(page: number) {
    this.page = page;
    this.loadCharactersByPage();
  }

  createList() {
    this.totalPages = [];
    for (let i = 1; i < this.totalPagesEmpty.length + 1; i++) {
      const element = this.totalPagesEmpty[i];
      this.totalPages.push(i);
    }
  }

  loadCharactersByPage() {
    this.isLoading = true;
    this.characterService.getCharacters(this.page).subscribe(data => {
      this.response = data;
      if (data.next === null) {
        this.next = false;
      } else {
        this.next = true;
      }
      this.characters = this.response.results;
      const totalItems = Number(this.response.count);
      this.totalPagesEmpty = new Array<number>(Math.ceil(totalItems / 10));
      this.createList();
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }
}
