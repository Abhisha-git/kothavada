import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

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

}
