import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { RoomService } from 'src/app/services/room.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {
  form!: FormGroup;
  rooms : any
  constructor(public studentService: StudentService,  private roomService : RoomService,
    private router: Router) { }

  ngOnInit(): void {
    this.AllRoom();
    this.form = new FormGroup({
      Fname: new FormControl('', [Validators.required]),
      Lname: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      idRoom : new FormControl('', Validators.required),
    });
  }
 async AllRoom() : Promise<void> {
    await this.roomService.getRooms()
    .subscribe(
      rooms => {
       this.rooms = rooms;
      });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.studentService.addStudent(this.form.value).subscribe((res:any) => {
         this.router.navigateByUrl('students-list');
    })
  }

}
