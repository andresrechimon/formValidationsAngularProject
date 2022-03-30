import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit{
  // myForm: FormGroup = new FormGroup({
  //   'name': new FormControl('Libro X'),
  //   'price': new FormControl(500),
  //   'stock': new FormControl(33)
  // });

  myForm:FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.myForm.reset({
      name: 'Libro X',
      price: 500
    })
  }

  validField(field:string){
    this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset();
  }
}
