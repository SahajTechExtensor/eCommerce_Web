import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filer.component.html',
  styleUrl: './filer.component.css'
})
export class FilerComponent {
  @Output() public searchData: EventEmitter<string> = new EventEmitter<string>();
  @Output() public categoryData : EventEmitter<string> = new EventEmitter<string>();

  category:string='All';

  GoSrearch(searchItem: string) {
    this.searchData.emit(searchItem)
    console.log(this.searchData)
  }

  GoCategory(){
    this.categoryData.emit(this.category);
    // console.log(this.category)
  }
}
