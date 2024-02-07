import { Component } from '@angular/core';
import { FilerComponent } from "./filer/filer.component";
import { DisplayComponent } from "./display/display.component";

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [FilerComponent, DisplayComponent]
})
export class BodyComponent {

}
