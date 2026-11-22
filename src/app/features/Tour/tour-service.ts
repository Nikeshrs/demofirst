import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class TourService {
    constructor(private http:HttpClient){}
    apiUrl='https://localhost:7193/api/TourData'
    apiUrlRoom='https://localhost:7193/api/TourData/room'
    getAllData(){
        return this.http.get(this.apiUrl);
    }

    getDataUsingId(id:any){
        return this.http.get(`${this.apiUrl}/${id}`)
    }
    update(id:any,data:any){
        return this.http.put(`${this.apiUrl}/${id}`,data)
    }
    insert(insertedData:any){
        return this.http.post(this.apiUrl,insertedData);
    }
    delete(id:any){
        return this.http.delete(`${this.apiUrl}/${id}`)
    }

    //rooooooooooooom
    getAllRoomData(){
        return this.http.get(this.apiUrlRoom);
    }

    getRoomDataUsingId(id:any){
        return this.http.get(`${this.apiUrlRoom}/${id}`)
    }
    updateRoom(id:any,data:any){
        return this.http.put(`${this.apiUrlRoom}/${id}`,data)
    }
    insertRoom(insertedData:any){
        return this.http.post(this.apiUrlRoom,insertedData);
    }
    deleteRoom(id:any){
        return this.http.delete(`${this.apiUrlRoom}/${id}`)
    }

}
