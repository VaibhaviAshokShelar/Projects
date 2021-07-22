import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { DoctorserviceService } from "../../doctorservice.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})

export class DoctorFormComponent implements OnInit {

  
  constructor(private router: Router, private dservice: DoctorserviceService, private toastr: ToastrService) { }
  dcharges = 0;
  ddesig: string;
  dname: string;
  demail: string;
  dexp: string;
  dgender: string;
  dspecial: number;
  duname: string;
  dpswd: string;


  @Input("docob") doc: any;
  @Output() myevent = new EventEmitter();

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges) {
    console.log("ngonchanges called");
    console.log(change);
    if (change["doc"].previousValue != change["doc"].currentValue) {
      this.dname = this.doc.name;
      this.dgender = this.doc.gender;
      this.demail = this.doc.email;
      this.dexp = this.doc.experience;
      this.ddesig = this.doc.designation;
      this.dcharges = this.doc.charges;
      this.dspecial = this.doc.specialization;
      this.duname = this.doc.username;
      this.dpswd = this.doc.password;
    }
  }


  ///////////////register doctor/////////////////////////////////////
  addDoctor() {
    this.dservice
      .registerdoctor(this.dname, this.ddesig, this.dgender, this.dcharges, this.dexp, this.demail,
        this.duname, this.dpswd, this.dspecial)
      .subscribe(
        data => {
          
          console.log("response received")
          // alert("Doctor Registered Successfully...")
          this.router.navigate(['/doctor-form'])
          sessionStorage['dname'] = data['dname']
          this.toastr.success('Done!', 'Doctor registered successfully!');
        },
        error => {
          console.log("exception occured")
          this.toastr.warning('Error!', 'Doctor Already exists!');
        }
      )
  }

  /////////////////////////on back////////////////////////////////////////
  onBack() {
    this.router.navigate(['/admin-page'])
  }
}

