import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminserviceService } from '../../service/adminservice/adminservice.service'

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  @Input() bookarr = [] as any;

  @Output() deleteEvent = new EventEmitter<string>();

  constructor(private admin : AdminserviceService) { }

  ngOnInit(): void {
  }

  deleteBook(){
    console.log(this.bookarr._id);
    let id = this.bookarr._id;

    this.admin.deleteBook(id).subscribe((res)=>{
      console.log(res);
      let message = "done"
      this.deleteEvent.emit(message);
    },(error) =>{
      console.log(error);
    })
    

  }

}
