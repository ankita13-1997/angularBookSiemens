import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserServiceService } from '../../service/userservice/user-service.service'
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
    selector: 'verify-user',
    templateUrl: './verfiy-user.component.html',
    styleUrls: ['./verify-user.component.css']
  })

  
  export class VerifyUser implements OnInit{
    
    
    token : any;
    constructor(private userService : UserServiceService,private activateRoute : ActivatedRoute,
      private snackBar: MatSnackBar){
       
      
        
    }
    
   
   
    
    ngOnInit(): void {
       
      this.token=this.activateRoute.snapshot.paramMap.get('token')
      console.log("the token ",this.token);
    }


    verify(){

      let arr = [] as any;
    
      this.userService.verifyUser(this.token).subscribe((response) =>
                                           {
                                            console.log("the rsponse of the verify user",response);
                                            arr=response;
                                            this.snackBar.open(arr.body, "Cancel");
                                           });
    }
  }