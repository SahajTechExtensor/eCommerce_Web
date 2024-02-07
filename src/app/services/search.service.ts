import { Injectable, OnInit, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SearchService{
 
  mySearchSubject:Subject<String> = new Subject();

  onSearchClicked(value:String){
    this.mySearchSubject.next(value);
  }
}
