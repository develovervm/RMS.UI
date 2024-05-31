import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl="https://localhost:7145/api/";
  constructor(private http:HttpClient) { }

  getAllCourses():Observable<any>{
    return this.http.get(this.baseUrl+'Courses/GetAll');
  }

  getCourseById(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'Courses/GetById/'+id);
  }
  addCourse(course:Course){
    return this.http.post(this.baseUrl+'Courses',course);
  }

  updateCourse(course:Course){
    return this.http.put(this.baseUrl+'Courses',course);
  }

  deleteCourse(id:number){
    return this.http.delete(this.baseUrl+'Courses/'+id)
  }
}
