import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../Interface/room.interface';
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
export class RoomService {

  url = 'http://localhost:3000/room/';

  constructor(private http: HttpClient) { }
  getRooms(): Observable<object> {
    return this.http.get(this.url, httpOptions);
  }
  getRoom(id: number): Observable<object> {
    const link = `${this.url}${id}`;
    return this.http.get(link, httpOptions);
  }
  getSTudentsInRoom(id: number): Observable<object> {
    const link = `${this.url}${id}/students`;
    return this.http.get(link, httpOptions);
  }
  deleteRoom(id: number): Observable<object> {
    const link = `${this.url}${id}`;
    return this.http.delete(link, httpOptions);
  }
  addRoom(Room: Room): Observable<Room> {
    
    return this.http.post<Room>(this.url, Room, httpOptions)
     
  }
  updateRoom(Room: Room, id:  number): Observable<Room> {
    const link = `${this.url}${id}`;
    return this.http.patch<Room>(link, Room, httpOptions)
     
  }
}
