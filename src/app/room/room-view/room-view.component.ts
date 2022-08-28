import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Interface/room.interface'; 
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service'; 
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/Interface/student.interface';


@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {

  id!: number;
  room !: Room;
  students : any;
  stud = [20];
  constructor(
    public roomService: RoomService, public studentService : StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['roomID'];
    this.getRoom();
  }
   async getRoom(): Promise<void> {
     this.roomService.getRoom(this.id).subscribe((data: any)=>{
      this.room = data;
    });
    await this.roomService.getSTudentsInRoom(this.id).subscribe((data)=>{
      this.students = data;      
    });

  }
  deleteStudent(index:number , id: any): void{
    this.studentService.deleteStudent(id)
    .subscribe(
      this.students.splice(index, 1)
    );
  }
}
