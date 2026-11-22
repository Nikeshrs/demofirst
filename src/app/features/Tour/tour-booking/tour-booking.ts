import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TourService } from '../tour-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, JsonPipe, RouterLink],
  selector: 'app-tour-booking',
  styleUrl: './tour-booking.css',
  templateUrl: './tour-booking.html',
})
export class TourBooking implements OnInit{
  group:FormGroup=new FormGroup({})
  constructor(private builder:FormBuilder,private service:TourService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.group=this.builder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      phone:[''],
      date:[''],
      people:[''],
      tour:[''],
      contactType:['']
    });
    const id=this.activatedroute.snapshot.paramMap.get('id');
    if(id){
      this.service.getDataUsingId(+id).subscribe({
        next:(user)=>{
          this.group.patchValue(user);
          console.log('We got values to be patched');
        },
        error:()=>{
          console.log('Somthing issue is there');
        },
        complete:()=>{
          console.log('patched successfully');
        }
      })
    }
  }

  
  
  submit(){
    const id=this.activatedroute.snapshot.paramMap.get('id');
    if(id){
      this.service.update(id,this.group.value).subscribe({
        next:()=>{
          console.log("Everything is fine to update");
        },
        error:()=>{
          console.log("Some issue in updating the record");
        },
        complete:()=>{
          console.log("Updated Successfully");
        }
      })
    }
    else{
      this.service.insert(this.group.value).subscribe({
      next:(value)=>{
        console.log('Inserted')
      },
      error:(error)=>{
        console.log('Error Happened')
      },
      complete:()=>{
        console.log("Success")
      },
    })
    }
  }
  
}
