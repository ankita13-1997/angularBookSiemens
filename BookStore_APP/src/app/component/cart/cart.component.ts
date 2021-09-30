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
  landmark=new FormControl('',[Validators.required])

  ngOnInit(): void {
    this.displayItems()
  }

  display(num){
    this.show += num;
  }

  displayItems(){
    let arr = [] as any;
    let arrImg=[] as any;

    arrImg=[
      "../.../../../../assets/bookimage/Image 11.png",
      "../.../../../../assets/bookimage/Image 7.png"
    ]
    this.user.getCartItem().subscribe((res) => {
      console.log("the display Items is called");
      console.log("the cart od books are ",res);
      arr = res
      this.length = arr.result;
      this.cartArray = arr;
      for(let i=0 ;i<=arr.length;i++){
        for(let j=0; j<=arrImg.length;j++){
              arr[i].image=arrImg[i];
        }

      }
      console.log(this.length);
      console.log(this.cartArray);
    },(error) =>{
      console.log(error)
    })
  }

  deleteBook(data : any){
    console.log(data);
    let id  = data.bookDetailsModel.bookId;
    console.log("the book to be deleted",id);
    
    this.user.deleteCartItem(id).subscribe((res : any) => {
      console.log(res)
      this._snackBar.open(res.object, "Cancel");
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
        address : this.address.value,
        city : this.city.value,
        state : this.state.value,
        landmark: this.landmark.value,
        
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
    let totalPrice=0.0
    let moneyarr= [] as any;
     moneyarr = this.cartArray;
    
    for(let cart of moneyarr){
             
              console.log("the cart ", cart);
             console.log("the total price in array",moneyarr);
         
            totalPrice=totalPrice+cart.totalPrice;
          
        
    }

      console.log("the total price ",totalPrice);
      this.user.addOrder(totalPrice).subscribe((res) => {
        console.log(res)
        this.router.navigate(['/orderPlaced'])
      },(error) => {
        console.log(error)
      })
    }
  
}
