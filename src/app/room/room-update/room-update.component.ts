import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/Interface/room.interface';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.scss']
})
export class RoomUpdateComponent implements OnInit {

  id!: number;
  room !: Room;
  form!: FormGroup;
  constructor(  public roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['roomID'];
    this.roomService.getRoom(this.id).subscribe((data: any)=>{
      this.room = data;
    }); 
       
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }
  submit(){

    this.roomService.updateRoom( this.form.value, this.id,).subscribe((res:any) => {
         this.router.navigateByUrl('rooms-list');
    })
  }
}
