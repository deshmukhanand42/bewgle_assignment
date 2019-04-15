import { Injectable } from '@angular/core';
import { Data } from './datamodel';
import { data } from './data';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private d: Data = new Data();
  private dd = data;

  constructor() {  }

  setData(dd){
    console.log(data);
      this.d.createdAt = data.createdAt;
      this.d.domain = data.domain;
      this.d.imageUrl = data.imageUrl;
      this.d.latestReviewDate = data.latestReviewDate;
      this.d.name = data.name;
      this.d.price = data.price;
      this.d.product_id = data.price;
      this.d.reviewCount = data.reviewCount;
      this.d.sourceCategory = data.sourceCategory;
      this.d.title = data.title;
      this.d.topScores = data.topScores;

  }

  getData(): Data{
    this.setData(this.dd);
    console.log(this.d);
    let rd = this.d;
    return rd;
  }
}
