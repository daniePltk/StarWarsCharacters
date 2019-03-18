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
  countPages: any;

  constructor(private characterService: CharactersService) {
  }

  ngOnInit() {
    this.loadCharactersByPage();
  }

  pageChanged(page: number) {
    this.page = page;
    this.loadCharactersByPage();
  }

  createPaginationSequence(count: number) {
    this.totalPages = [];
    for (let i = 1; i < count + 1; i++) {
      this.totalPages.push(i);
    }
  }

  loadCharactersByPage() {
    this.isLoading = true;
    this.characterService.getCharacters(this.page).subscribe(data => {
      this.response = data;
      this.characters = this.response.results;
      if (data.next === null) {
        this.next = false;
      } else {
        this.next = true;
      }
      if (!this.countPages) {
        const totalCharacters = Number(this.response.count);
        this.countPages = Math.ceil(totalCharacters / 10);
        this.createPaginationSequence(this.countPages);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }
}
