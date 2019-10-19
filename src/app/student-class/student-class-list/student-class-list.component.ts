import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student-class-list',
  templateUrl: './student-class-list.component.html',
  styleUrls: ['./student-class-list.component.scss']
})
export class StudentClassListComponent implements OnInit {
  @Input() private student;
  @Output() private selectedStudent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  abc(student) {
    this.selectedStudent.emit(student);
     
  }
}
