import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavService } from 'src/app/auth/navs/services/nav.service';
import { NzFormatEmitEvent, NzTreeComponent } from 'ng-zorro-antd';
import { RightService } from '../../services/right.service';

@Component({
  selector: 'role-nav-form',
  templateUrl: './role-nav-form.component.html',
  styleUrls: ['./role-nav-form.component.css']
})
export class RoleNavFormComponent implements OnInit {

  @Input() addNavFormVisible: boolean;
  @Input() id: number;
  @Output() visibleChangeBack = new EventEmitter();
  @ViewChild('treeComponent', null) treeComponent: NzTreeComponent;

  showForm: FormGroup;
  rolenavlist: any;//已经存在的菜单
  list: any; //全部的菜单

  moduleId=104;

  role = { roleName: '' };
  nodes: TreeData[] = [];

  //{ role: 0, roleName: "", navId: 0, navCode: "", actionId: 0, actionCode: "" }
  navactions = [];

  defaultCheckedKeys = [];
  defaultSelectedKeys = [];
  defaultExpandedKeys = [];

  constructor(private fb: FormBuilder, private navService: NavService, private rightService: RightService) {
    this.showForm = this.fb.group(["showForm"]);
  }

  ngOnInit() {

  }

  getList() {
    //显示菜单的列表
    this.navService.getDetailsList(this.moduleId).subscribe(x => {
      this.list = x;

      //查询已经存在的权限
      this.rightService.getRoleNavList(this.id).subscribe(y => {
        this.rolenavlist = y;
        this.showTree();
      }
      );
    });
  }

  showTree() {
    this.nodes = [];
    console.log(this.list,"list");
    let wh_navs = this.list.filter(x=>x.nav.pId == this.moduleId);
    //处理显示逻辑:
    for (let i = 0; i < wh_navs.length; i++) {
      let item = wh_navs[i];
      let master = {
        title: item.nav.nameCn,
        key: 'nav-' + item.nav.id,
        code: item.nav.code,
        tag: item.nav.id,
        isLeaf: false,
        expanded: true,
        children: []
      }

      item.detailList.forEach((x) => {
        master.children.push(
          {
            title: x.name,
            key: 'action-' + x.id,
            code: x.code,
            tag: x.id,
            isLeaf: true,
            expanded: true
          })
      });

      this.nodes.push(master);
    }

    this.defaultCheckedKeys = [];
    //显示选中
    this.rolenavlist.forEach(item => {

      item.detailList.forEach(child => {
        this.defaultCheckedKeys.push('action-' + child.id);
      })
    });
  }

  nzEvent(event: NzFormatEmitEvent): void {

  }

  handleCancel() {
    this.visibleChangeBack.emit(false);
  }

  handleOk() {
    let selecteds = this.treeComponent.getCheckedNodeList();
    this.navactions = [];
    selecteds.forEach((item) => {
      //子节点
      let actions = item.origin.children;
      if (actions == null || actions == undefined) {
        //说明选中的是子节点
        let action = item.origin;
        let a = item.parentNode.origin as any;
        let data = { role: this.id, navId: a.tag, actionId: action.tag };
        this.navactions.push(data);
      }
      else {
        //说明选中的是父节点
        actions.forEach((action) => {
          this.navactions.push({
            role: this.id, navId: item.origin.tag, actionId: action.tag
          });
        }
        );
      }
    });

    // 保存数据
    if (this.navactions.length >= 0) {
      this.rightService.createRoleNav(this.id, this.moduleId, this.navactions).subscribe(x => {
        this.doOk(x);
      });
    }
  }

  private doOk(x: string) {
    if (x.toString().toLowerCase() == "true") {
      this.visibleChangeBack.emit(false);
    }
  }
}
