import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {DataAccessService} from '../data-access.service';
//import {PageListComponent} from '../page-list/page-list.component';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted= new EventEmitter<string>();//@Output is used to communicate to the parent component template i.e. app.component.html
  term='';
  //flag2=true;
  constructor(
    private dataAccess: DataAccessService,
    //private pageList: PageListComponent
  ) {}
    
  ngOnInit(): void {
  }
  onInput(value: string){
    this.term=value;
  }
  onFormSubmit(event: any){
    event.preventDefault();
    /*for (let index = 0; index < this.pageList.pages.length; index++) {
      const element = this.pageList.pages[index];
      this.dataAccess.executeDataSaveService(element).subscribe((response:any)=>{
        console.log("Saved?"+index);
      });  
    }*/
    this.submitted.emit(this.term);
    //this.flag2=false;
  }

}
