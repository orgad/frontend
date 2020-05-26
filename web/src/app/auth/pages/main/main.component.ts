import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService, en_US, zh_CN } from 'ng-zorro-antd';
import { MenuData } from 'src/app/datas/menu-data';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isCollapsed = false;
  switchValue = true;

  items: Menu[];

  constructor(private translateService: TranslateService, private i18n: NzI18nService,
    private roleService: RoleService) { }

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
    this.roleService.getRoleNav("").subscribe(
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
