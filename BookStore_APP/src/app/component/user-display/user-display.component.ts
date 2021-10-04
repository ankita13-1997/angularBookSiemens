import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { UserServiceService } from 'src/app/service/userservice/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';


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
  token : any;
  bookArray = [] as any
  

  sorts: Sort[] = [
    {value: 'lowtohigh', viewValue: 'Price: Low to High'},
    {value: 'hightolow', viewValue: 'Price: Hight to Low'},
    {value: 'new', viewValue: 'Newest'}
  ];
  constructor(private admin : AdminserviceService,private user : UserServiceService,private _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
     this.getAllBooks();
    //  this.token=this.actvatedroute.snapshot.paramMap.get('token');
    //   console.log("the token ",this.token);
    //   console.log("the rrequest token in cart ",this.token);
  }

  getAllBooks(){
    let arr = [] as any;
    let arrImg=[] as any;

    arrImg=[
      "../.../../../../assets/bookimage/Image 11.png",
      "../.../../../../assets/bookimage/Image 7.png",
      "../.../../../../assets/bookimage/Image 10.png",
      "../../../../../assets/bookimage/image36.png"

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
      bookId : productId,
      quantity : 1,
      totalPrice:data.bookPrice
      
    }



    console.log("the request object   in the cart ",reqObj);
    
    this.user.addProduct(reqObj).subscribe((res) => {
      console.log( "the added product to cart ",res);
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
