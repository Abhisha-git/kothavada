import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { RentList } from '../models/rent-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  rentList: RentList[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getRentList();
  }

  getRentList(): void {
    this.apiService.getRentList().subscribe((data) => {
      this.rentList = data.rentList;
      console.log(data);
    });
    console.log(this.rentList);
  }
  clickMe(): void {
    console.log('this button is clicked');
  }
}
