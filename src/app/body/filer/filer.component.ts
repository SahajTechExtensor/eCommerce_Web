import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { filerService } from '../../services/filter.servece';

@Component({
  selector: 'app-filer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filer.component.html',
  styleUrl: './filer.component.css'
})
export class FilerComponent {
  // @Output() public searchData: EventEmitter<string> = new EventEmitter<string>();
  // @Output() public categoryData : EventEmitter<string> = new EventEmitter<string>();
  private filSer:filerService = inject(filerService);
  category:any;

  GoSrearch(searchItem: string) {
    // this.searchData.emit(searchItem)
    // console.log(this.searchData)
  }

  GoCategory(){
    // this.categoryData.emit(this.category);
    this.filSer.onFilter(this.category);
  }
}
