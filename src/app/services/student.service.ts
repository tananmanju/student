import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  api:any = 'https://student-management-api-1u3cd4j7s.now.sh/students';
  constructor(private http :HttpClient) { 
  console.log("inside service");
  }
  getStudents(){
    return this.http.get<any>(this.api);
  }
}
