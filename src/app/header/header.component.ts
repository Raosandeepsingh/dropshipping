import { Component, TemplateRef, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDetailsList } from './constants/header-section';
import { Translations } from '../translations.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, from, pluck } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,TranslateModule,RouterModule,ModalModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent {
  userRole =  -1
  sectionDetailsList: typeof SectionDetailsList = SectionDetailsList;
  sectionIndex: number = -1;
  isSectionItems: boolean = false;
  modalRef: BsModalRef<any>;
  dataToSend = {
    key1: 'showLoginPop',
  };
  constructor(
    public translations: Translations,
    private router: Router,
    private modalService: BsModalService,

  ){

  }
  ngOnInit() {
    // console.log(this.sectionDetailsList)
    
  
  }
 navigationExtras = {
    queryParams: this.dataToSend,
  };
    
  openModal(template: TemplateRef<any>, data: any) {
    this.router.navigate(['/login'], this.navigationExtras);
  }


  scrollTo(id:string, index:number) {
    if(document.querySelector('#' + id)) {
      document.querySelector('#' + id)?.scrollIntoView({behavior:'smooth'});
      this.sectionIndex = index;
    } else {
      this.router.navigate(['/'], { fragment: id });
    }
  }
  
 
}
