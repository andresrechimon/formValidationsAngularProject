import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm!:NgForm; 

  initForm = {
    product: 'Libro X',
    price: 10,
    stock: 33
  }

  constructor() { }

  ngOnInit(): void {
  }

  validName():boolean{
    return this.myForm?.controls['product']?.invalid && this.myForm.controls['product']?.touched
  }

  validPrice():boolean{
    return this.myForm?.controls['price']?.touched && this.myForm?.controls['price']?.value < 0;
  }

  save(){
    console.log(this.myForm);
    this.myForm.resetForm();
  }
}
