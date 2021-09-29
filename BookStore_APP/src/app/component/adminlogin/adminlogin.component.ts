import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AdminserviceService } from '../../service/adminservice/adminservice.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  hide = true;

  constructor( private admin : AdminserviceService,private router: Router) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.password.hasError('required')){
      return 'You must enter a value'
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit(){
    if(this.email.valid && this.password.valid){
      let reqObj = {
        email : this.email.value,
        password : this.password.value
      }

      let arr = [] as any;
      console.log(reqObj);

      this.admin.login(reqObj).subscribe((res) =>{
        console.log(res);
        arr = res;
        console.log(arr.result.accessToken);
        localStorage.setItem('access',arr.result.accessToken);
        this.router.navigate(['/dashboard']);
      },(error) =>{
        console.log(error);
      })
    }
  }

}
