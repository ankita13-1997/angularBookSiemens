import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/userservice/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  show = 1;
  show1 = 0;
  show2 = 1;

  constructor(private user : UserServiceService,private _snackBar: MatSnackBar,private router : Router) { }

  cartArray = [] as any;
  length = 0;

  name = new FormControl('',[Validators.required])
  phoneNo = new FormControl('',[Validators.required])
  pincode = new FormControl('',[Validators.required])
  locality = new FormControl('',[Validators.required])
  address = new FormControl('',[Validators.required])
  city = new FormControl('',[Validators.required])
  state = new FormControl('',[Validators.required])
  type = new FormControl('',[Validators.required])

  ngOnInit(): void {
    this.displayItems()
  }

  display(num){
    this.show += num;
  }

  displayItems(){
    let arr = [] as any
    this.user.getCartItem().subscribe((res) => {
      console.log(res)
      arr = res
      this.length = arr.result.length;
      this.cartArray = arr.result
      console.log(this.length);
      console.log(this.cartArray);
    },(error) =>{
      console.log(error)
    })
  }

  deleteBook(data : any){
    console.log(data);
    let id  = data._id;
    console.log(id);
    
    this.user.deleteCartItem(id).subscribe((res : any) => {
      console.log(res)
      this._snackBar.open(res.message, "Cancel");
      this.displayItems()
    },(error) => {
      console.log(error)
    })
  }


  editDetails(){
    this.show1 += this.show;
    this.show2 -= 1;
    if(this.address.valid && this.type.valid && this.city.valid && this.state.valid){

      let reqObj = {
        addressType : this.type.value,
        fullAddress : this.address.value,
        city : this.city.value,
        state : this.state.value
      }

      console.log(reqObj);

      this.user.editDetails(reqObj).subscribe((res : any) => {
        console.log(res)
        this._snackBar.open(res.message, "Cancel");
      },(error) => {
        console.log(error)
      })
    }
  }

  addOrder(){
    console.log(this.cartArray)

    for(let cart of this.cartArray){
      let reqObject = {
        orders: [
          {
            product_id: cart._id,
            product_name: cart.bookName,
            product_quantity: cart.quantity,
            product_price: cart.price
          }
        ]
      }

      console.log(reqObject)
      this.user.addOrder(reqObject).subscribe((res) => {
        console.log(res)
        this.router.navigate(['/orderPlaced'])
      },(error) => {
        console.log(error)
      })
    }
  }
}
