import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, map } from 'rxjs';
// import { HttpClientModule } from '@angular/common/http';
interface Event {
  date: Date;
  name: string;
}

interface CalendarDay {
  date: Date;
  events: Event[];
  isHovered: boolean;
}


@Component({
  selector: 'app-calenderui',
  templateUrl: './calenderui.component.html',
  styleUrls: ['./calenderui.component.sass']
})
export class CalenderuiComponent implements OnInit{
 currentMonth: number;
  currentYear: number;
  dayNames: string[];
  calendar: CalendarDay[][];
  events: Event[];
  isTooltipVisible: boolean;
  tooltipDate: Date;
  tooltipEvents: Event[];
  upcomingEvents: Event[];

  constructor() {
    this.currentMonth = (new Date()).getMonth() + 1;
    this.currentYear = (new Date()).getFullYear();
    this.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.calendar = [];
    this.events = [];
    this.isTooltipVisible = false;
    this.tooltipDate = null;
    this.tooltipEvents = [];
    this.upcomingEvents = [];
  }

  ngOnInit() {
    this.generateCalendar();
    this.populateEvents();
    this.getUpcomingEvents();
  }

  generateCalendar() {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth - 1, 1);
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth, 0);
    const numDaysInMonth = lastDayOfMonth.getDate();

    const firstDayOfWeek = firstDayOfMonth.getDay();
    const numWeeks = Math.ceil((numDaysInMonth + firstDayOfWeek) / 7);

    this.calendar = [];

    let currentDate = 1;
    for (let week = 0; week < numWeeks; week++) {
      const calendarWeek: CalendarDay[] = [];

      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        const calendarDay: CalendarDay = {
          date: null,
          events: [],
          isHovered: false
        };

        if (week === 0 && dayOfWeek < firstDayOfWeek) {
          // Previous month's days
          const prevMonthDate = new Date(this.currentYear, this.currentMonth - 2, 0).getDate() - firstDayOfWeek + dayOfWeek + 1;
          calendarDay.date = new Date(this.currentYear, this.currentMonth - 2, prevMonthDate);
        } else if (currentDate > numDaysInMonth) {
          // Next month's days
          const nextMonthDate = currentDate - numDaysInMonth;
          calendarDay.date = new Date(this.currentYear, this.currentMonth, nextMonthDate);
        } else {
          // Current month's days
          calendarDay.date = new Date(this.currentYear, this.currentMonth - 1, currentDate);
          currentDate++;
        }

        calendarDay.events = this.getEventsForDate(calendarDay.date);

        calendarWeek.push(calendarDay);
      }

      this.calendar.push(calendarWeek);
    }
  }
  getEventsForDate(date: Date): Event[] {
    return this.events.filter(event => event.date.toDateString() === date.toDateString());
  }

  populateEvents() {
    this.events = [
    { name: 'Event 1', date: new Date(this.currentYear, this.currentMonth - 1, 5) },
    { name: 'Event 2', date: new Date(this.currentYear, this.currentMonth - 1, 10) },
    { name: 'Event 3', date: new Date(this.currentYear, this.currentMonth - 1, 15) },
    { name: 'Event 4', date: new Date(this.currentYear, this.currentMonth - 1, 20) },
    { name: 'Event 5', date: new Date(this.currentYear, this.currentMonth - 1, 25) },
  ];

  this.generateCalendar();
  }


  getUpcomingEvents() {
     const today = new Date();
    this.upcomingEvents = this.events
      .filter(event => event.date >= today)
      .slice(0, 3); // Display a maximum of three upcoming events
  }

  isCurrentDay(day: CalendarDay): boolean {
    const today = new Date();
    return (
      day.date &&
      day.date.getFullYear() === today.getFullYear() &&
      day.date.getMonth() === today.getMonth() &&
      day.date.getDate() === today.getDate()
    );
  }

  getMonthName(month: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month - 1];
  }

  hasEvent(day: CalendarDay): boolean {
    return day.events.length > 0;
  }

  
  showTooltip(date: Date) {
    this.tooltipDate = date;
    this.tooltipEvents = this.getEventsForDate(date);
    this.isTooltipVisible = true;
  }

  hideTooltip() {
    this.isTooltipVisible = false;
    this.tooltipDate = null;
    this.tooltipEvents = [];
  }

   navigateToPreviousMonth() {
    if (this.currentMonth === 1) {
      this.currentMonth = 12;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }

    this.generateCalendar();
    this.getUpcomingEvents();
  }

  navigateToNextMonth() {
    if (this.currentMonth === 12) {
      this.currentMonth = 1;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }

    this.generateCalendar();
    this.getUpcomingEvents();
  }
  onMouseOver(day: CalendarDay) {
  day.isHovered = true;
  if (this.hasEvent(day)) {
    this.tooltipDate = day.date;
    this.tooltipEvents = day.events;
    this.isTooltipVisible = true;
  } else {
    this.hideTooltip();
  }
}

  onMouseOut(day: CalendarDay) {
    day.isHovered = false;
    this.hideTooltip();
  }

}
