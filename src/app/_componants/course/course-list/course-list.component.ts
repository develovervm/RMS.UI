import { Component, OnInit } from '@angular/core';
import { Course } from '../../../_models/course';
import { CourseService } from '../../../_services/course.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  courseList:Course[]=[];
 constructor(private courseService:CourseService){
  this.getCourses();
 }
  ngOnInit(): void {
   
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
