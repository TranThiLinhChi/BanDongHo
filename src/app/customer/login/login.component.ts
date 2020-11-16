import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseComponent implements OnInit {

  public registerForm: FormGroup;
  public loginForm: FormGroup;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(8),]),
      name: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required,Validators.nullValidator,]),
      phone: new FormControl('', [Validators.required,Validators.maxLength(10),]),
      address: new FormControl('', [Validators.required])
    });
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      remember: new FormControl(false, []),
    });
  }
  onSubmitLogin(value: any) { 

  }
  onSubmitRegister(value: any) { 

    this._api.post('/api/customer/create-item', {customer_email:value.email,id:value.id, customer_password:value.password,name:value.name,phone:value.phone,address:value.address} ).takeUntil(this.unsubscribe).subscribe(res => {
     alert('Tạo thành công');
      }, err => { });      

  }
}