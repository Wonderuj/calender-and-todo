import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewuiComponent } from '../newui.component';
import { SidebarnewComponent } from '../sidebarnew/sidebarnew.component';
import { NavbarnewComponent } from '../navbarnew/navbarnew.component';
import { MainuiComponent } from '../mainui/mainui.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { QueryFeedComponent } from '../query-feed/query-feed.component';
import { CalenderuiComponent } from '../calenderui/calenderui.component';
import { BirthdayComponent } from '../birthday/birthday.component';

const routes: Routes = [
  {
    path:'newui',
    component: NewuiComponent
  },

  {
    path:'sidebarnew',
    component: SidebarnewComponent
  },

  {
    path:'navbarnew',
    component: NavbarnewComponent
  },
  {
    path:'mainui',
    component: MainuiComponent
  },
  {
    path:'todolist',
    component: TodolistComponent
  },
  {
    path: 'queryfeed',
    component: QueryFeedComponent
  },
  {
    path: 'calenderui',
    component:CalenderuiComponent
  },
  {
    path: 'birthday',
    component: BirthdayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewuimodRoutingModule { }
