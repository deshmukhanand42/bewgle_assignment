import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {

  constructor( private dataserviceService: DataserviceService ) { }
  public keys;
  public values;
  public url;
  public data ={};

  ngOnInit() {
    let data = this.dataserviceService.getData();
    
    this.keys = Object.keys(data);
    this.values = Object.values(data);
    this.url = data.imageUrl;
    this.data = data;
    console.log(data);
  }

}
