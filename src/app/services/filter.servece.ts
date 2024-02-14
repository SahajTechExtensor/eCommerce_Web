import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class filerService {

    public setFiler:Subject<string> = new Subject();

    onFilter(filer:string) {
        this.setFiler.next(filer)
    }
}