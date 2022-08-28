
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Interface/student.interface';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:3000/student/';

  constructor(private http: HttpClient) { }
  getStudents(): Observable<object> {
    return this.http.get(this.url, httpOptions);
  }
  getStudent(id: number): Observable<object> {
    const link = `${this.url}${id}`;
    return this.http.get(link, httpOptions);
  }
  deleteStudent(id: number): Observable<object> {
    const link = `${this.url}${id}`;
    return this.http.delete(link, httpOptions);
  }
  addStudent(student: Student): Observable<Student> {
  
    return this.http.post<Student>(this.url, student, httpOptions)
     
  }
  updateStudent( student: Student, id?: number,): Observable<Student> {
    const link = `${this.url}${id}`;
    return this.http.patch<Student>(link, student, httpOptions)
     
  }
}

