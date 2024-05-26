import { Routes } from '@angular/router';
import { HomeComponent } from './_componants/home/home.component';
import { RegisterComponent } from './_componants/register/register.component';
import { DashboardComponent } from './_componants/dashboard/dashboard.component';
import { CourseListComponent } from './_componants/course/course-list/course-list.component';
import { CourseAddComponent } from './_componants/course/course-add/course-add.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'courseList',component:CourseListComponent},
    {path:'addCourse',component:CourseAddComponent}
];
