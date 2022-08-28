import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {

  form!: FormGroup;
  constructor(public roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.roomService.addRoom(this.form.value).subscribe((res:any) => {
         this.router.navigateByUrl('rooms-list');
    })
  }

}
