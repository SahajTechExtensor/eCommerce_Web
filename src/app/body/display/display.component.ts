import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { ItemComponent } from "./item/item.component";
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { SearchService } from '../../services/search.service';

@Component({
    selector: 'app-display',
    standalone: true,
    templateUrl: './display.component.html',
    styleUrl: './display.component.css',
    imports: [ItemComponent, NgFor, NgIf],
    providers:[ProductService]
})
export class DisplayComponent implements OnInit, AfterViewInit{
    
    ProductService:ProductService = inject(ProductService);
    searchServices:SearchService = inject(SearchService);
    productList:any[] = [];
    searchOptions:String = '';

    ngOnInit(){
        this.ProductService.mySubject.subscribe((data)=>{
            data.products.forEach((element:any) => {
                this.productList.push(element);
            });
            })

        this.searchServices.mySearchSubject.subscribe((value:String)=>{
            this.searchOptions = value;
        })
    }
        
    ngAfterViewInit(){
        // this.ProductService.getDate();
    }
}
