import { Component, Input } from '@angular/core';
import { CharacterModel } from './character.model';

@Component({
  selector: 'app-character',
  template: `
    <div>{{characterModel.name}} | {{characterModel.height}} | {{characterModel.birth_year}} | {{characterModel.gender}}</div>`
})
export class CharacterComponent {
  @Input()
  public characterModel: CharacterModel;
}
