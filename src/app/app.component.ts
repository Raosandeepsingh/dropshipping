import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderComponent } from './header/header.component';
import { Translations } from './translations.service';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NgxSpinnerModule,LoadingBarHttpClientModule,HeaderComponent,TranslateModule,RouterModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dummy';
  addSlideCls = false;
  constructor(public translations: Translations){
  }
}
