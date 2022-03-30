import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.nameNsurnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    user: ['', [Validators.required, this.validatorService.cantBeDekoi]],
    password1: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },{
    validators: [this.validatorService.equalFields('password1', 'password2')]
  })

  get emailErrorMsg():string{
    const errors = this.myForm.get('email')?.errors;

    if(errors?.['required']){
      return 'El correo es obligatorio'
    }else if(errors?.['pattern']){
      return 'Esto no es un formato de correo válido'
    }else if(errors?.['emailTaken']){
      return 'Correo no disponible. Seleccione otro.'
    }
    return '';
  };

  constructor(private fb:FormBuilder, 
              private validatorService:ValidatorService,
              private emailValidator:EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Andres Rechimon',
      email: 'test1@test.com',
      user: 'andresrechi'
    })
  }

  validField(field:string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  submitForm(){
    this.myForm.markAllAsTouched();
  }
}
