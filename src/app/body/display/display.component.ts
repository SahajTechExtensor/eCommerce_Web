import { AfterViewInit, Component, DoCheck, OnInit, inject } from '@angular/core';
import { ItemComponent } from "./item/item.component";
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { SearchService } from '../../services/search.service';
import { FilterPipe } from '../../Pipes/filter.pipe';
import { filerService } from '../../services/filter.servece';

@Component({
    selector: 'app-display',
    standalone: true,
    templateUrl: './display.component.html',
    styleUrl: './display.component.css',
    providers: [ProductService],
    imports: [ItemComponent, NgFor, NgIf, FilterPipe]
})
export class DisplayComponent implements OnInit, DoCheck{

    
    ProductService:ProductService = inject(ProductService);
    searchServices:SearchService = inject(SearchService);
    productList:any[] = [];
    searchOptions:String = '';
       
    getSer: filerService = inject(filerService);
    getCat: string = '';

    ngOnInit(){
        this.ProductService.mySubject.subscribe((data)=>{
            data.products.forEach((element:any) => {
                this.productList.push(element);
            });
            })

        this.searchServices.mySearchSubject.subscribe((value:String)=>{
            this.searchOptions = value;
        })
        console.log(this.productList)
    }
    ProductDetail(data:Object){
        console.log(data);

    }

    ngDoCheck(): void {
        this.getSer.setFiler.subscribe(da =>this.getCat = da);
    }

}
