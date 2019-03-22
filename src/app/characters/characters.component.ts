import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { CharacterModel } from './character.model';

export interface IResponse {
  count: number;
  results: Array<CharacterModel>;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  isLoading: boolean;
  response: IResponse;
  characters: Array<CharacterModel> = [];
  page = 1;
  next: boolean;
  totalPages: Array<number>;
  countPages: number;

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
      // Create Pagination Sequence once
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
