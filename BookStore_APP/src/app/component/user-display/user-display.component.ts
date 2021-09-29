import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { UserServiceService } from 'src/app/service/userservice/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';


interface Sort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  selectedValue: string;

  bookArray = [] as any
  constructor(private admin : AdminserviceService,private user : UserServiceService,private _snackBar: MatSnackBar) { }

  sorts: Sort[] = [
    {value: 'lowtohigh', viewValue: 'Price: Low to High'},
    {value: 'hightolow', viewValue: 'Price: Hight to Low'},
    {value: 'new', viewValue: 'Newest'}
  ];

  ngOnInit(): void {
     this.getAllBooks();
  }

  getAllBooks(){
    let arr = [] as any;
    let arrImg=[] as any;

    arrImg=[
      "../.../../../../assets/bookimage/Image 11.png",
      "../.../../../../assets/bookimage/Image 7.png"
    ]

    this.admin.getBooks().subscribe((res)=>{ 
      console.log("the get of books are",res);
      // arr = res;
      // console.log("id",arr.result.bookId);
       this.bookArray = res;
      for(let i=0 ;i<=this.bookArray.length;i++){
        for(let j=0; j<=arrImg.length;j++){
              this.bookArray[i].image=arrImg[i];
        }

      }

    },(error)=>{
      console.log(error);
    })
  }

  addToCart(data){
    console.log("the product in add to cart book ",data);

    let productId = data.bookId;
    let arr = []  as any;

    let reqObj = {
      quantity : 1,
      productId
    }
    console.log("the book id in the cart ",productId);

    this.user.addProduct(reqObj).subscribe((res) => {
      console.log( "the added product to cart ",res)
      arr = res
      this._snackBar.open(arr.message, "Cancel");
    },(error) => {
      console.log(error)
      this._snackBar.open(arr.message, "Cancel");
    })
  }

  addToWishList(data){
    let productId = data._id;
    let arr = [] as any

    let reqObj = {
      quantity : 1
    }

    this.user.addToWishlist(productId,reqObj).subscribe((res) => {
      console.log(res);
      arr  =res
      this._snackBar.open(arr.message, "Cancel");
    },(error) => {
      console.log(error);
      this._snackBar.open(arr.message, "Cancel");
    })
  }

}
