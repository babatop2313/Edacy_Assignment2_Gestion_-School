import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { RoomComponent } from './room/room.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentUptadateComponent } from './student/student-uptadate/student-uptadate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomCreateComponent } from './room/room-create/room-create.component';
import { RoomUpdateComponent } from './room/room-update/room-update.component';
import { RoomViewComponent } from './room/room-view/room-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    RoomComponent,
    StudentCreateComponent,
    StudentUptadateComponent,
    RoomCreateComponent,
    RoomUpdateComponent,
    RoomViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      {path: 'students-list', component: StudentComponent},
      {path: 'students/create', component: StudentCreateComponent},
      {path: 'students/:studentID/edit', component: StudentUptadateComponent},
      {path: 'rooms-list', component: RoomComponent},
      {path: 'rooms/create', component: RoomCreateComponent},
      {path: 'rooms/:roomID/edit', component: RoomUpdateComponent},
      {path: 'rooms/:roomID', component: RoomViewComponent},
      {path: '', component: HomeComponent},
   
    ]),
  ],
 
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
