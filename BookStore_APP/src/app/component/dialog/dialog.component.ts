import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AdminserviceService } from '../../service/adminservice/adminservice.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() bookarr = [] as any;

  constructor(private admin : AdminserviceService) { }

  bookName = new FormControl('', [Validators.required]);
  author = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  quantity = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  discount = new FormControl('', [Validators.required]);

  ngOnInit(): void {
  }

  addBook(){
    if(this.bookName.valid && this.author.valid && this.description.valid && this.quantity.valid && this.price.valid && this.discount.valid){
      let reqObj = {
        bookName: this.bookName.value,
        author: this.author.value,
        description: this.description.value,
        quantity: this.quantity.value,
        price: this.price.value,  
        discountPrice: this.discount.value  
      }

      console.log(reqObj);
      
      this.admin.addBook(reqObj).subscribe((res) =>{
        console.log(res);
      },(error)=>{
        console.log(error);
      })
    }
  }
}
