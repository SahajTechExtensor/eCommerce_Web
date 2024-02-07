import { Injectable, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ProductService{
  private url='https://dummyjson.com/products';
  private client:HttpClient = inject(HttpClient)
  mySubject:Observable<any> = this.client.get(this.url);
}
