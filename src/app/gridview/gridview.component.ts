import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {

  @Input()
  rows: any[];

  @Input()
  cols: any[];

  @Input()
  config: IConfig;

  @Output()
  onRowSelected: EventEmitter<any> = new EventEmitter<any>()

  @Output()
  onRowUnSelected: EventEmitter<any> = new EventEmitter<any>();

  selectedCar:any


  first: number = 0;

  constructor() { }

  ngOnInit() {
  

  }

  onRowSelect(item) {  
    this.onRowSelected.emit(item["data"])
  }

  onRowUnselect(item){
    this.onRowUnSelected.emit(item["data"])
  }



}

export interface IConfig {
  scrollable: boolean,
  paginator: boolean,
  rows: number,
  scrollHeight: string,
  selectionMode?: "single" | "multiple"
  checkboxSelection?:boolean
  checkboxOffset?:string,
  radioSelection?:boolean,
  radioOffset:string;
  showContextMenu?:boolean
  contextMenus?:any[];
  selectedMenuItem?:any
}

export interface IColumn {
  header: string;
  field: string;
  width: string;
  filterable: boolean;
}



