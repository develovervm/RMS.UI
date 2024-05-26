import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Course } from '../../../_models/course';
import { AccountService } from '../../../_services/account.service';

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.css'
})
export class CourseAddComponent implements OnInit {

  course:Course=new Course;
  userName:string='';
  constructor(private formBuilder:FormBuilder,private accountService:AccountService){}

  courseForm=this.formBuilder.group({
    courseCode:new FormControl('',{nonNullable:true}),
    courseName:new FormControl('',{nonNullable:true}),
    discription:new FormControl('',{nonNullable:true}),
    duration:new FormControl('',{nonNullable:true})

  })

  ngOnInit(): void {
    this.getUserName();
    console.log(this.userName);
  }
  getUserName(){
    this.accountService.currentUser$.subscribe({
      next:(res:any)=>{
        this.userName=res.userName
      }
    })
  }
  onSave(){
    
    this.course.courseCode=this.courseForm.controls.courseCode.value;
    this.course.courseName=this.courseForm.controls.courseName.value;
    this.course.description=this.courseForm.controls.discription.value;
    this.course.duration=this.courseForm.controls.duration.value;
    this.course.userName='Vijay';
    console.log(this.course);
    console.log(this.courseForm.value);
  }
  
}
