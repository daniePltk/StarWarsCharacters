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
  totalPages: number;

  constructor(private characterService: CharactersService) { }
  ngOnInit() {
    this.loadCharactersByPage();
  }
  pageChanged(p: number) {
    this.page = p;
    this.loadCharactersByPage();
  }

  loadCharactersByPage() {
    this.isLoading = true;
    this.characterService.getCharacters(this.page).subscribe(data => {
      this.response = data;
      if (data.next == null) {
        this.next = true;
      } else {
        this.next = false;
      }
      this.characters = this.response.results;
      // const totalItems = Number(this.response.count);
      // this.totalPages = Math.ceil(totalItems / 10);
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }
}
