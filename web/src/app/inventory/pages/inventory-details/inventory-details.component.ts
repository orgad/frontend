import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {


  sku: string;
  invtDetails : InvtDetailModel[];
  listOfDisplayData: InvtDetailModel[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {}; 
  isCollapse: boolean = true;
  isAllDisplayDataChecked: boolean = true;
  isIndeterminate: boolean = true;

  constructor(private invtService:InventoryService,private route :ActivatedRoute) { }

  ngOnInit() {
    this.sku = this.route.snapshot.params["id"];
    this.getDetails();
  }
   
   private getDetails():void{
    this.invtService.getInvtDetails(this.sku).subscribe(
      result=> {
        this.invtDetails =  result.data;
      }
    );
   }

   currentPageDataChange($event: InvtDetailModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
    .every(item => this.mapOfCheckedId[item.id]);
  this.isIndeterminate =
    this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
    !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id]==value);
  }
  
}
