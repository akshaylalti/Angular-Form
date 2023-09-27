import { Component, ViewChild,OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myReativeForm!: FormGroup;
  title = 'form';
  userName ='';
  @ViewChild('myForm')
  myForm!: NgForm;
  Genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  defaultGender='Male';
  deaultEmail='goodjilla@gmail.com';
  defaultCourse='Angular';
  ngOnInt(){}
  submitted = false;
  formData = {
    name:'',
    email:'',
    course:'',
    Genders:''
  }
  onSubmit(form:NgForm){
    console.log(this.myForm);
    this.submitted=true;
    this.formData.name=this.myForm.value.userDetails.name;
    this.formData.email=this.myForm.value.userDetails.email;
    this.formData.course=this.myForm.value.course;
    this.formData.Genders=this.myForm.value.course;

    this.myForm.reset();
  }
  onClick(){
    // this.myForm.setValue(
    //   {
    //     userDetails:{
    //       name:"Akshay",
    //       email:'akshaylalti@gmail.com'
    //     },
    //     course:'Angular',
    //     Genders:'Male'
    //   }
    // )
    this.myForm.form.patchValue(
      {
        userDetails:{
          name:'akshay'
        }
      }
    )
  }

}
