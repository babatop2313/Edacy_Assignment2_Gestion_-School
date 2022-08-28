import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Injectable } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

@Injectable()
export class StudentComponent implements OnInit {
  students: any;
  loaded : boolean;
  constructor(private studentsService: StudentService, private roomService : RoomService) {
    this.loaded = false;
   }
  
  ngOnInit(): void {
    this.allStudents();
  }
  allStudents(): void {
    
    this.studentsService.getStudents()
      .subscribe(
        students => {
          this.students = students;
          for( let i = 0; i<this.students.length; i++){
            let room; 
            this.roomService.getRoom(this.students[i].idRoom).subscribe((data: any)=>{
              room = data;
              this.students[i].room = room.name;
            }); 
             
          }
          this.loaded = true;
        });
  
  }
  deleteStudent(index:number , id: any): void{
    this.studentsService.deleteStudent(id)
    .subscribe(
      this.students.splice(index, 1)
    );
  }
}
