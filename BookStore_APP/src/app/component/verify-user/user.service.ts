import { Injectable } from '@angular/core';
import  {HttpService} from '../httpService/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) {
    
   }

register(reqdata:any){
     return this.httpService.postData('user/register',reqdata)
}


verifyUser(reqdata:any){
  console.log("the data from verf",reqdata);
  return this.httpService.getData(`user/verify/email/${reqdata}`);

}

login(data : any){
  return this.httpService.postDataWithToken('user/login',data,'')
}

forgotPassword(data: any) {
  return this.httpService.postData(`user/resend/mail?emailID=${data}`,data);
}

}
