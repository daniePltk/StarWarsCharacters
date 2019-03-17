import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Page } from './pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() changePage = new EventEmitter();
  @Input() totalPages: number;
  @Input() currentPage: number;
  @Input() next: boolean;
  constructor() { }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.changePage.emit(this.currentPage);
  }
  prevPage() {
    this.currentPage = this.currentPage - 1;
    this.changePage.emit(this.currentPage);
  }
}
