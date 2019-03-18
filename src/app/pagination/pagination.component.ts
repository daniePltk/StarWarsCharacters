import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from './pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() changePage = new EventEmitter();
  @Input() totalItems: any;
  @Input() currentPage: number;
  @Input() isNextPage: boolean;
  @Input() isDisabled: boolean;

  constructor() {
  }

  choosenPage(page) {
    this.currentPage = page;
    this.changePage.emit(this.currentPage);
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.changePage.emit(this.currentPage);
  }

  prevPage() {
    this.currentPage = this.currentPage - 1;
    this.changePage.emit(this.currentPage);
  }
}
