import { Component } from '@angular/core';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent {

  asn: Asn;

  ngOnInit() {
    this.asn.whId = 20001;
  }
}
