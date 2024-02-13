import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  CustomerDataList: any;
  customerFacilityList: any;
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getCustomerDataList().subscribe((data: any)=>{
      this.CustomerDataList = data.CustomerDataList;
    });
    this.api.getCustomerFacilityList().subscribe((data:any)=>{
      console.log(data)
      this.customerFacilityList = data.customerFacilityList;
      
    });
  }
 

}
