import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = environment.api_url;
  readonly PhotoUrl = environment.photo_url;

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl + '/department/', val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl + '/department/', val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl + '/department/' + val);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/employee/', val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/employee/', val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/employee/' + val);
  }

  UploadPhoto(val:any) {
    return this.http.post(this.APIUrl + '/SaveFile', val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

}
