import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Injectable } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../Interface/student.interface';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
@Injectable()
export class RoomComponent implements OnInit {

  rooms : any;
  students : any;
  idRoom : any;
  constructor(private roomService: RoomService, private studentService : StudentService) { }

  ngOnInit(): void {
    this.allRooms();
  }
  async allRooms(): Promise<void> {
   await this.studentService.getStudents().subscribe(
      students => {
        this.students = students;
      }
    )
    await this.roomService.getRooms()
      .subscribe(
        rooms => {
          this.rooms = rooms;
          for(let j = 0 ; j< this.rooms.length ; j++){
            this.rooms[j].nbStudent = 0;
            for(let i = 0 ; i< this.students.length; i++){
    
              this.studentService.getStudent(this.students[i].id).subscribe((data: Student)=>{
                this.idRoom = data.idRoom;
                if(this.rooms[j].id == this.idRoom){
                  this.rooms[j].nbStudent++;
                }
               
              }); 
              }
          }
         
        });
  
  }
  deleteRoom(index:number , id: any): void{
    this.roomService.deleteRoom(id)
    .subscribe(
      this.rooms.splice(index, 1)
    );
  }

}
