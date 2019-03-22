import { Component, Input } from '@angular/core';
import { CharacterModel } from './character.model';

@Component({
  selector: 'app-character',
  styles: ['.property-row { border-bottom: 1px solid gray} .property-cell{ display: inline-block; min-width: 200px;  margin-right: 20px;} .property-cell span {font-weight: bold;}'],
  template: `
    <div class="property-row">
      <span class="property-cell">Name: <span>{{characterModel.name}}</span></span>
      <span class="property-cell">Height: <span>{{characterModel.height}}</span></span>
      <span class="property-cell">Birth Year: <span>{{characterModel.birth_year}}</span></span>
      <span class="property-cell">Gender: <span>{{characterModel.gender}}</span></span>
    </div>`
})
export class CharacterComponent {
  @Input()
  public characterModel: CharacterModel;
}
