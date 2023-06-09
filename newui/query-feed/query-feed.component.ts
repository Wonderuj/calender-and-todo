import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-query-feed',
  templateUrl: './query-feed.component.html',
  styleUrls: ['./query-feed.component.sass']
})
export class QueryFeedComponent implements OnInit {
  queryForm: FormGroup;
  feedbackForm: FormGroup;
  suggestionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.queryForm = this.fb.group({
      query: ['', Validators.required]
    });

    this.feedbackForm = this.fb.group({
      feedback: ['', Validators.required]
    });

    this.suggestionForm = this.fb.group({
      suggestion: ['', Validators.required]
    });
  }

  onQuerySubmit(): void {
    if (this.queryForm.valid) {
      const queryValue = this.queryForm.value.query;
      // Process the query form data here
      console.log('Query submitted:', queryValue);
      this.queryForm.reset();
    }
  }

  onFeedbackSubmit(): void {
    if (this.feedbackForm.valid) {
      const feedbackValue = this.feedbackForm.value.feedback;
      // Process the feedback form data here
      console.log('Feedback submitted:', feedbackValue);
      this.feedbackForm.reset();
    }
  }

  onSuggestionSubmit(): void {
    if (this.suggestionForm.valid) {
      const suggestionValue = this.suggestionForm.value.suggestion;
      // Process the suggestion form data here
      console.log('Suggestion submitted:', suggestionValue);
      this.suggestionForm.reset();
    }
  }
}
