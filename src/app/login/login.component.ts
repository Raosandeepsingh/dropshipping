import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { routes } from '../app.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('showLoginPop', { static: true }) showLoginPopTemplate: TemplateRef<any>;
  isLogin: boolean = false
  slugValue: any;
  modalRef: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,

  ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params['key1'])
      if (params["key1"]) {
        this.openModal(this.showLoginPopTemplate)
      }
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'invitteamchallenge__pop' });
    this.modalRef.onHidden.subscribe(() => {
      this.clearPath();
    });
  }
  clearPath() {
    this.router.navigate(['/']);
  }

  hideAddTeamsToChallengeFormAndResetValues() {
    this.modalRef.hide()
    this.router.navigate([''])
  }
}
