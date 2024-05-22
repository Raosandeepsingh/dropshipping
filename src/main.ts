import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';



bootstrapApplication(AppComponent, appConfig,

)
  .catch((err) => console.error(err));
  
