import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersService } from './characters/characters.service';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './characters/character.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    CharactersComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
