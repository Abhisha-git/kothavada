import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { RentList } from '../models/rent-list';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor(private httpClient:HttpClient){}
getCustomerDataList():any{
  const url ='assets/customer-data/customer-data.json';
  return this.httpClient.get(url);
}
getCustomerFacilityList():any{
  const url ='assets/customer-facility/customer-facility.json';
  return this.httpClient.get(url);
}
getRentList():Observable<any>{
  const url ='assets/rent-list/rent-list.json';
  return this.httpClient.get<RentList[]>(url);
}
}
