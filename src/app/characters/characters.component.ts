import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { CharacterModel } from './character.model';
import { PaginationComponent } from '../pagination/pagination.component';

export interface IResponse {
  results: Array<any>;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  isLoading: boolean;
  response: IResponse;
  characters: Array<any>;
  page: any;
  itemsPerPage = 10;

  constructor(private characterService: CharactersService) {
    // this.page = pagination.page.page;
    this.loadCharactersByPage();
  }


  loadCharactersByPage() {
    // const params = new URLSearchParams();
    const params = this.page;
    this.isLoading = true;
    this.characterService.getCharacters(params).subscribe(data => {
      this.response = data;
      this.characters = this.response.results;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }
}
