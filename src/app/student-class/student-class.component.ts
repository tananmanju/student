import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.component.html',
  styleUrls: ['./student-class.component.scss']
})
export class StudentClassComponent implements OnInit {
  sortdata: any;
  studentDetails: any;
  constructor(private student: StudentService) { }


  ngOnInit() {
    this.student.getStudents().subscribe(student => {

      const map = new Map();
      for (const item of student) {
        let result = map.get(item.class);
        if (!result) result = [];
        result.push(item);
        map.set(item.class, result);
      }
    
      this.sortdata = map
    })
  }

  private showStudentData(student) {
    console.log(student);
    this.studentDetails = student;
  }

}

