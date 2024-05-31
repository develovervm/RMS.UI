import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Course } from '../../../_models/course';
import { AccountService } from '../../../_services/account.service';
import { CourseService } from '../../../_services/course.service';
import { error } from 'console';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { User } from '../../../_models/user';


@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.css'
})
export class CourseAddComponent implements OnInit {

  course:Course=new Course;
  userId:number=0;
  operationName:string='';
  constructor(private formBuilder:FormBuilder,private accountService:AccountService,
    private courseService:CourseService,private router:Router,private activatedRoute:ActivatedRoute){}

  courseForm=this.formBuilder.group({
    courseCode:new FormControl('',{nonNullable:true}),
    courseName:new FormControl('',{nonNullable:true}),
    discription:new FormControl('',{nonNullable:true}),
    duration:new FormControl('',{nonNullable:true})

  })

  ngOnInit(): void {
    this.getUserName(); 
   var courseId=this.activatedRoute.snapshot.paramMap.get('courseId');
    console.log(courseId);
    if(courseId=="0"){
      this.operationName='Save';
    }
    else{
      this.operationName="Update";
      this.getCourseById(courseId)
    }
  }
  getUserName(){
    this.accountService.currentUser$.subscribe({
      next:(res:any)=>{
        this.userId=res.id
      }
    })
  }

  getCourseById(id:any){
    this.courseService.getCourseById(id).subscribe({
      next:(response)=>{
        this.setFormData(response);
        console.log(this.course);
      },
      error:(err)=>{console.log(err)}
    })
  }

  setFormData(course:Course){
    this.courseForm.controls.courseCode.setValue(course.courseCode);
    this.courseForm.controls.courseName.setValue(course.courseName);
    this.courseForm.controls.discription.setValue(course.description);
    this.courseForm.controls.duration.setValue(course.duration);
  }
  onSave(){
    this.course.courseCode=this.courseForm.controls.courseCode.value;
    this.course.courseName=this.courseForm.controls.courseName.value;
    this.course.description=this.courseForm.controls.discription.value;
    this.course.duration=this.courseForm.controls.duration.value;
    this.course.userId=this.userId;   
    console.log(this.course);
    
    let courseId=this.activatedRoute.snapshot.paramMap.get('courseId');
    if(courseId=="0"){
      
      this.courseService.addCourse(this.course).subscribe({
        next:(res)=>{
          if(res){
            this.router.navigateByUrl('courseList');
          }
        },
        error:(err)=>console.log(err)
      })
    }
    else{
      this.course.id=Number(courseId);
      this.courseService.updateCourse(this.course).subscribe({
        next:(res)=>{
          if(res){
            this.router.navigateByUrl('courseList');
          }
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }


  }
  Update(){
    
  }
  
}
