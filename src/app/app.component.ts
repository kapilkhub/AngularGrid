import { Component, OnInit } from '@angular/core';
import { IConfig, IColumn } from './gridview/gridview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  
  config:IConfig={
    paginator:true,
    rows:10,
    scrollHeight:'350px',
    scrollable:true,    
    radioSelection:true,
    radioOffset:"5%",
    showContextMenu:true,
    contextMenus:[
      { label: 'View', icon: 'pi pi-search', command: (event) => console.log(this.config.selectedMenuItem) },
      { label: 'Delete', icon: 'pi pi-times', command: (event) => console.log(this.config.selectedMenuItem) }
  ]
    
  }
  
  ngOnInit(): void {
    this.columns = GridColumns;
  }
  title = 'grid';
  columns:any[]

  rows=[
    {
    name:'Kapil Khubchandani',
    age:29,
    status:'Married',
    gender:'Male',
    country:'UAE'
  },
  {
    name:'Ishmeet Singh',
    age:27,
    status:'Single',
    gender:'Male',
    country:'Germany'
  }
]
}



const GridColumns :IColumn[]  = [
  {
    header: 'Name',
    field: 'name',
    width:'45%',
    filterable:true
  },
  {
    header: 'Age',
    field: 'age',
    width:'15%',
    filterable:true
  },
  {
    header: 'Status',
    field: 'status',
    width:'20%',
    filterable:true
  },
  {
    header: 'Gender',
    field: 'gender',
    width:'15%',
    filterable:true
  }
]
