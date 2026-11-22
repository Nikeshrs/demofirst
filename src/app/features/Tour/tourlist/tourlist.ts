import { Component, OnInit, signal } from '@angular/core';
import { TourService } from '../tour-service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-tourlist',
  styleUrl: './tourlist.css',
  templateUrl: './tourlist.html',
})
export class Tourlist implements OnInit{

  constructor(private service:TourService,private router:Router){}
  allDbData=signal<any[]>([]);
  


  ngOnInit(): void {
    console.log(this.allDbData());
    this.service.getAllData().subscribe({
      next:(data)=>{
        console.log("Got Data",data);
        console.log("Data type:", Array.isArray(data));
        this.allDbData.set(data as any[]);
      },
      error:(error)=>{
        console.log("Some Issue Happened");
      },
      complete:()=>{
        console.log("Finally Done");
      },
    })
  }

  deleteRecord(id:any){
    
    this.service.delete(id).subscribe({
      next:()=>{
        
        console.log("Everythig is perfect for deletion");
      },
      error:()=>{
        console.log("Some problem in deleting process ");
      },
      complete:()=>{
        console.log("Deleted successfully");
        this.ngOnInit();
      }
    })
  }
  updateId(id:any){
        this.router.navigate(['/tourbooking',id])
      }

}
