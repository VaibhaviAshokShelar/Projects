import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'

})
export class DoctorserviceService  {
// export class DoctorserviceService implements CanActivate {

  url = 'http://localhost:7070/doctor';
  url1 = 'http://localhost:7070/doctor/name';

  constructor(
    private router: Router,
    private httpClient: HttpClient) { }


  updateDoctor(body) {
    debugger;
    return this.httpClient.post<any>(this.url + "/updateDoctor", body);   
   
  }
  ////////for register doctor//////////////////

  registerdoctor(drName: string, designation: string, gender: string, consultationCost: number,
    experience: string, emailID: string, drusername: string, drpassword: string, specializationId: number): Observable<any> {
    const body = {
      drName: drName,
      designation: designation,
      gender: gender,
      consultationCost: consultationCost,
      experience: experience,                        //postman
      emailID: emailID,
      drusername: drusername,
      drpassword: drpassword,
      specializtnDr: {
        specializationId: specializationId
      }
    }
    return this.httpClient.post<any>(this.url + "/registerDr", body);
  }

  /////////////for doctor login//////////////////////////////////////

  logindoctor(drusername: string, drpassword: string): Observable<any> {
    const body = {
      drusername: drusername,
      drpassword: drpassword                                       //postman    
    }
    return this.httpClient.post<any>(this.url + "/login", body);
  }

  //////////////////for get all details of doctor////////////////////////
  getdoctor(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }

  ///////////////////////for delete doctor///////////////////////////
  deletedoctor(drid) {
    return this.httpClient.delete(this.url + "/" + drid)                         //postman
     
  }

  ////////////////////////////search: get doctor by name//////////////////////////////////////////////



  searchdoctor(drName: string) {
  
    return this.httpClient.get(this.url1+'/'+drName);
  }
  
  

  /////////////////////////////////////////////////////////////////////////////////

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (sessionStorage['drusername']) {

  //     return true
  //   } else {
  //     this.router.navigate(['/login-as'])
  //     return false
  //   }
  // }

}
