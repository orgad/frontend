import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService, en_US, zh_CN } from 'ng-zorro-antd';
import { RightService } from '../../access-control/services/right.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isCollapsed = false;
  switchValue = true;
  loginname:string;
  items: Menu[];

  constructor(private translateService: TranslateService, private i18n: NzI18nService,
    private rightService: RightService) { }

  ngOnInit() {
    // --- set i18n begin ---
    this.translateService.addLangs(["zh", "en"]);
    this.translateService.setDefaultLang("en");
    const browserLang = this.translateService.getBrowserLang();
    //this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'en');
    this.translateService.use('zh');
    // --- set i18n end ---
    
    this.showMenu();
  }

  showMenu() {
    let userId = localStorage.getItem("userid");
    this.loginname = userId;
    this.rightService.getNavListByLoginName(userId).subscribe(
      r => { this.items = r; }
    );
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
