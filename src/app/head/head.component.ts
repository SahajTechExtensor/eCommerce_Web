import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  searchServices:SearchService = inject(SearchService);
  @ViewChild('searchInput') searchInput!:ElementRef;

  onSearchClicked(){
      this.searchServices.onSearchClicked(this.searchInput.nativeElement.value.trim());
  }

}
