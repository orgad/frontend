import { Component, OnInit } from '@angular/core';
import { StockCheckService } from '../services/stock-check.service';

@Component({
  selector: 'app-stock-check-task-list',
  templateUrl: './stock-check-task-list.component.html',
  styleUrls: ['./stock-check-task-list.component.css']
})
export class StockCheckTaskListComponent implements OnInit {

  list: StockCheckModel[];

  constructor(private stockCheckService: StockCheckService) { }

  ngOnInit() {
    this.getList();
  }

  private getList() {
    this.stockCheckService.getList().subscribe(
      r => {
         this.list = r.data;
      }
    );
  }

}
