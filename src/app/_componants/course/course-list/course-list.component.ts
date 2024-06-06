import { Component, OnInit } from '@angular/core';
import { Course } from '../../../_models/course';
import { CourseService } from '../../../_services/course.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountService } from '../../../_services/account.service';
import { User } from '../../../_models/user';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  courseList:Course[]=[];
  userType!:string;
 constructor(private courseService:CourseService,private accService:AccountService){
  this.getCourses();
 }
  ngOnInit(): void {
   this.getUserType();
  }
  getUserType(){
    this.accService.currentUser$.subscribe({
      next:(user:any)=>{
        if(user){
          this.userType=user.userType;
          console.log(this.userType);
        }
      }
    })
  }
  getCourses(){
    this.courseService.getAllCourses().subscribe({
      next:(courses:Course[])=>{this.courseList=courses},
      error:(err)=>console.log(err)
    })
  }

  deleteCourse(courseId:any){
    var result=confirm("are you sure, you want to delete the record");
    
    if(result){
      this.courseService.deleteCourse(courseId).subscribe({
        next:(res)=>{
          console.log(res)
          if(res){
            this.getCourses();
          }
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }
}
