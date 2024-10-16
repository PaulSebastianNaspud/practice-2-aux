import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./sections/header/header.component";
import { FooterComponent } from "./sections/footer/footer.component";
import { AddCourseComponent } from "./components/add-course/add-course.component";
import { ListCourseComponent } from './components/list-course/list-course.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Course } from '../models/course';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AddCourseComponent, ListCourseComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pageWeb';

   @Output() eventAddNewCourse = new EventEmitter()

   sendDataToList(course :Course){
      this.eventAddNewCourse.emit(course)
   }

}
