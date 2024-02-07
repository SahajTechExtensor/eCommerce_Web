import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "./head/head.component";
import { BodyComponent } from "./body/body.component";
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './services/search.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeadComponent, BodyComponent,HttpClientModule],
    providers:[SearchService]
})
export class AppComponent {
  title = 'shope';
}
