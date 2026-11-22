import { Component, OnInit, signal } from '@angular/core';
import { TourService } from '../tour-service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-roomlist',
  styleUrl: './roomlist.css',
  templateUrl: './roomlist.html',
})
export class Roomlist implements OnInit{
  constructor(private service:TourService,private router:Router){}
  allRoomDbData=signal<any[]>([]);
  ngOnInit(): void {
    console.log(this.allRoomDbData());
    this.service.getAllRoomData().subscribe({
      next:(data)=>{
        console.log("Got Data",data);
        console.log("Data type:", Array.isArray(data));
        this.allRoomDbData.set(data as any[]);
      },
      error:(error)=>{
        console.log("Some Issue Happened");
      },
      complete:()=>{
        console.log("Finally Done");
      },
    })
    
  }


  deleteRoomRecord(id:any){
    this.service.deleteRoom(id).subscribe({
      next:()=>{
        this.ngOnInit();
        console.log("Everythig is perfect for deletion");
      },
      error:()=>{
        console.log("Some problem in deleting process ");
      },
      complete:()=>{
        console.log("Deleted successfully");
      }
    })
  }
  updateRoomId(id:any){
        this.router.navigate(['/roomform',id])
      }
}
