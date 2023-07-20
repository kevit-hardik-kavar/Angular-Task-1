import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskName!: string;
  taskArray: Array<string> = [];
  isEdit!: number;
  updatedValue!: string;

  onAddTask() {
    if (!this.taskName) {
      alert('Please enter task name!');
    } else {
      this.taskArray.push(this.taskName);
      this.taskName = '';
    }
  }
  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }
  onEdit(index: number) {
    this.isEdit = index;
    this.updatedValue =this.taskArray[index]
  }
  onKeyUp(event:any){
    this.taskArray[this.isEdit] = event?.target.value
    this.isEdit = -1

    
  }
}
