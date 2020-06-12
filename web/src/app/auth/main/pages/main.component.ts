import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService, en_US, zh_CN } from 'ng-zorro-antd';
import { RightService } from '../../access-control/services/right.service';
import { Router } from '@angular/router';
import { Auth } from 'src/app/datas/auth';
import { AuthDataService } from 'src/app/services/auth/auth-data.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isCollapsed = false;
  switchValue = true;
  loginName: string;
  items: Menu[];

  constructor(private router: Router, private authData: AuthDataService,
    private translateService: TranslateService, private i18n: NzI18nService,
    private rightService: RightService) { }

  ngOnInit() {
    // --- set i18n begin ---
    this.translateService.addLangs(["zh", "en"]);
    this.translateService.setDefaultLang("en");
    const browserLang = this.translateService.getBrowserLang();
    //this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'en');
    this.translateService.use('zh');
    // --- set i18n end ---
    if (this.authData.get(Auth.loginName) != null) {
      this.getAllRights();
    }
    else
      this.logOff();
  }

  private getAllRights(): void {
    this.loginName = this.authData.get(Auth.loginName);
    this.rightService.getAuthDetails(this.loginName).subscribe(
      r => {
        this.items = r.vNavs;
        this.setAuths(r.userInfo);
      }
    );
  }

  private setAuths(userInfo: any) {
    this.authData.set(Auth.userId, userInfo.id);

    let roleIds = "";
    userInfo.roleInfos.forEach(element => {
      roleIds += element.roleId + ",";
    });

    this.authData.set(Auth.roles, roleIds.substr(0,roleIds.length-1));
  }

  logOff() {
    localStorage.clear();
    this.router.navigateByUrl("login");
  }

  switchLanguage() {
    if (this.switchValue) {
      this.translateService.use('zh');
      this.i18n.setLocale(zh_CN);
    }
    else {
      this.translateService.use('en');
      this.i18n.setLocale(en_US);
    }
  }

}
