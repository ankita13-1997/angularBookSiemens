import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpservie/http-service.service';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  accessToken = localStorage.getItem('userToken');
  
  
  constructor(private http : HttpServiceService,public actvatedroute : ActivatedRoute ) { }


  options = {
    headers: new HttpHeaders({
      'token':this.accessToken,
      'Content-Type': 'application/json',
      'accept': 'application/json'
    })
  }
  
 

  register(data : any){
    return this.http.post('user/register',data,'')
  }

  verifyUser(reqdata:any){
    console.log("the data from verf",reqdata);
    return this.http.getData(`user/verify/email/${reqdata}`);
  
  }


  login(data : any){
    return this.http.post('user/login',data,'')
  }

  addProduct(data : any){
    console.log("the log data ",this.options);
    return this.http.post('cart/addtocart',data,this.options);
  }

  getCartItem(){
    return this.http.get('get_cart_items',this.options)
  }

  addToWishlist(id : any, data: any){
    return this.http.post('add_wish_list/'+id,data,this.options)
  }

  deleteCartItem(id : any){
    return this.http.delete('remove_cart_item/'+id,this.options)
  }

  editDetails(data : any){
    return this.http.put('edit_user',data,this.options)
  }

  addOrder(data : any){
    return this.http.post('add/order',data,this.options)
  }
}
