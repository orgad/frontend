import { Component, OnInit } from '@angular/core';
import { InStService } from '../../services/in-st.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-in-st-details',
  templateUrl: './in-st-details.component.html',
  styleUrls: ['./in-st-details.component.css']
})
export class InStDetailsComponent implements OnInit {

  id:number;
  st:InStModel={id:0,code:"",whId:0,custId:0,brandId:0};
  list:InStD[];
  rcv:InStRcv;
  pa : InStPutAway;

  constructor(private route: ActivatedRoute,private stService:InStService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDetails();
  }

  doRefresh():void
  {
    this.getDetails();
  }

  private getDetails():void{
      this.stService.getDetails(this.id).subscribe(
        r=>{
          console.log(r);
           this.st = r.tSt;
           this.list = r.tStDs;
           this.rcv = r.tStRcv,
           this.pa = r.tStPutAway
        }
      );
  }

}
