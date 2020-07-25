import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'app-email-auth',
  templateUrl: './email-auth.component.html',
  styleUrls: ['./email-auth.component.css']
})
export class EmailAuthComponent implements OnInit {

  emailUrl = '/server/api/send-email';
  emailSuccessMessage : String;
  to_address: String;

  verifyOtp = '/server/api/verify?number=';
  enteredOTP:number;
  otpSuccessMessage :String;

  loginStatus : boolean =false;

 

  constructor(private http: HttpClient, private router: Router, private loginService :LoginServiceService) {
  }

  ngOnInit(): void {
  }

  postData() {

    this.http.post(this.emailUrl, {

      to_address: this.to_address

    }).toPromise().then((data: any) => {

      this.emailSuccessMessage = JSON.stringify(data.sendResponse)
      
      console.log(this.emailSuccessMessage);

    })
  }


  validateOTP() {

    this.http.get(this.verifyOtp + this.enteredOTP ,{ responseType: 'text' })
        .toPromise().then((data:any)=>{
          
          if(data=='Correct OTP')
          {
            this.loginService.setLoggedIn(true);
            this.router.navigate(['login']);
          }
          else{
            window.alert(data);
          }
          
          
        })


  }




}


