import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewuimodRoutingModule } from './newuimod-routing.module';
import { NewuiComponent } from '../newui.component';
import { SidebarnewComponent } from '../sidebarnew/sidebarnew.component';
import { NavbarnewComponent } from '../navbarnew/navbarnew.component';
import { MainuiComponent } from '../mainui/mainui.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { QueryFeedComponent } from '../query-feed/query-feed.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { CalenderuiComponent } from '../calenderui/calenderui.component';
import { HttpClientModule } from '@angular/common/http';
import { BirthdayComponent } from '../birthday/birthday.component';

@NgModule({
  declarations: [NewuiComponent,SidebarnewComponent, NavbarnewComponent, MainuiComponent, TodolistComponent, QueryFeedComponent ,CalenderuiComponent, BirthdayComponent],
  imports: [
    CommonModule,
    NewuimodRoutingModule, ReactiveFormsModule, MatIconModule, MatMenuModule,
    MatButtonModule, MatProgressBarModule, MatExpansionModule, MatTabsModule,
    FormsModule, MatDatepickerModule, MatInputModule,  HttpClientModule
  ]
})
export class NewuimodModule { }
