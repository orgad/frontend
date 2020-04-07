import { Component, OnInit } from '@angular/core';
import { MoveService } from '../services/move.service';

@Component({
  selector: 'app-move-task-list',
  templateUrl: './move-task-list.component.html',
  styleUrls: ['./move-task-list.component.css']
})
export class MoveTaskListComponent implements OnInit {

  list: MoveModel[];

  constructor(private moveService: MoveService) { }

  ngOnInit() {
    this.getList();
  }

  private getList() {
    this.moveService.getList().subscribe(
      r => {
         this.list = r.data;
      }
    );
  }

}
