import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorTabComponent } from './doctor-tab/doctor-tab.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { DoctorserviceService } from '../doctorservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';




@NgModule({
  declarations: [DoctorFormComponent, DoctorListComponent, DoctorTabComponent, DoctorPageComponent, ViewAppointmentComponent, ViewFeedbackComponent],
  imports: [
    CommonModule,FormsModule,HttpClientModule 
   
  ],

  exports:[
    DoctorFormComponent,
    DoctorListComponent,
    DoctorTabComponent,
    ViewAppointmentComponent, 
    ViewFeedbackComponent
  ],
  providers:[DoctorserviceService]
})
export class DoctorProfileModule { }
