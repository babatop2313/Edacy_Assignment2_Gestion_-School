import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Interface/student.interface'; 
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { RoomService } from 'src/app/services/room.service';
@Component({
  selector: 'app-student-uptadate',
  templateUrl: './student-uptadate.component.html',
  styleUrls: ['./student-uptadate.component.scss']
})
export class StudentUptadateComponent implements OnInit {

  id!: number;
  student !: Student;
  form!: FormGroup;
  rooms: any;
  constructor(  public studentService: StudentService, public roomService : RoomService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['studentID'];
    this.studentService.getStudent(this.id).subscribe((data: Student)=>{
      this.student = data;
    }); 
    this.AllRoom();
    this.form = new FormGroup({
      Fname: new FormControl('', [Validators.required]),
      Lname: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      idRoom : new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.form.controls;
  }
  async AllRoom() : Promise<void> {
    await this.roomService.getRooms()
    .subscribe(
      rooms => {
       this.rooms = rooms;
      });
  }
  submit(){

    this.studentService.updateStudent( this.form.value, this.id,).subscribe((res:any) => {
         this.router.navigateByUrl('students-list');
    })
  }


}
