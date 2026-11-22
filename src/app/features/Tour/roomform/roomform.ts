import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TourService } from '../tour-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-roomform',
  styleUrl: './roomform.css',
  templateUrl: './roomform.html',
})
export class Roomform implements OnInit{
  group:FormGroup=new FormGroup({})
  constructor(private builder:FormBuilder,private service:TourService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.group=this.builder.group({
      name:[''],
      email:[''],
      phone:[''],
      adults:[''],
      children:[''],
      inDate:[''],
      outDate:['']
    });
    const id=this.activatedroute.snapshot.paramMap.get('id');
    if(id){
      this.service.getRoomDataUsingId(+id).subscribe({
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

  submitRoom(){
    const id=this.activatedroute.snapshot.paramMap.get('id');
    if(id){
      this.service.updateRoom(id,this.group.value).subscribe({
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
      this.service.insertRoom(this.group.value).subscribe({
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
