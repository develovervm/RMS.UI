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
    return this.http.get(this.baseUrl+'Courses');
  }
}
