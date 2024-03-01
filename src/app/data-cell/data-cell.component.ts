import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RentList } from '../models/rent-list';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss'],
})
export class DataSellComponent {
  // public _rentList: RentList[] = [];

  // @Input() get rentList(): RentList[] {
  //   return this._rentList;
  // }

  // set rentList(value: RentList[]) {
  //   this._rentList = value;
  // }
  @Input() rentList: RentList[] = [];
  @Output() customEvent = new EventEmitter<string>();
  constructor() {}
  clickMe(): void {
    this.customEvent.emit();
  }
}
