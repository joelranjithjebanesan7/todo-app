import { Component, inject, TemplateRef } from '@angular/core';
import { ToasterService } from '../toaster.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(
    public toastService: ToasterService
    ) {}
  taskList: string[] = [];
  task: string = '';
  shownToaster: Boolean = false
  addTodo() {
    if (this.task.trim() !== '') {
      this.shownToaster = false
      this.taskList.push(this.task);
      this.task = '';
      this.toastService.show('Task added successfully.');
      this.shownToaster = true
    }
  }

  removeTodo(index: number) {
    this.shownToaster = false
    this.taskList.splice(index, 1);
    this.toastService.show('Task removed successfully')
    this.shownToaster = true
  }
}
