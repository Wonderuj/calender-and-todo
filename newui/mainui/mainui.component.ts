import { DatePipe } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, AbstractControl ,FormsModule} from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-mainui',
  templateUrl: './mainui.component.html',
  styleUrls: ['./mainui.component.sass']
})
export class MainuiComponent implements OnInit {

  todoDynamic: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoDynamic = this.fb.group({
      todo: this.fb.array([
        this.createTodoGroup()
      ])
    });
  }

  dateVal = new Date();

  get todo(): FormArray{
    return this.todoDynamic.get('todo') as FormArray
  }
  
  createTodoGroup(): FormGroup {
    const currentDate = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const month = monthNames[monthIndex];
    return this.fb.group({
      todoHead: '',
      description: '',
      cardReady: false ,// Add cardReady control with initial value of false
      date: `${day}-${month}`,
      progress: 0 
    });
  }
  
  panelOpenState = false;
  @ViewChild(MatExpansionPanel) panel: MatExpansionPanel;
  onClick1(i: any) {
    this.panel.close();
  }

  
  
  onClick2(i: any) {
    this.panel.open();
  }
  addTask() {
    this.todo.push(this.createTodoGroup());
  }

  setCardReady(control: AbstractControl): void {
    control.get('cardReady').setValue(true);
  }
  
  handleAddButtonClick(event: KeyboardEvent, control: AbstractControl): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      control.get('cardReady')?.setValue(true);
    }
  }
  
  
  removeTodo(i: any) {
     let arr= this.todo;
    arr.removeAt(i);
  }

  postContent: string;
  posts: { content: string }[] = [];

  createPost() {
    if (this.postContent) {
      const newPost = { content: this.postContent };
      this.posts.push(newPost);
      this.postContent = '';
    }
  }
}



