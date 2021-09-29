import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../service/adminservice/adminservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  bookArray = [] as any;
  message = "done";

  constructor(private admin : AdminserviceService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  updatePage($event){ 
    this.getAllBooks();
  }

  getAllBooks(){
    let arr = [] as any;
    this.admin.getBooks().subscribe((res)=>{
      console.log("the books are ",res);
      console.log(res);
      arr = res;
      console.log("the array are of books",arr);
      this.bookArray = arr.result;
    },(error)=>{
      console.log(error);
    })
  }
}
