import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-guests',
  templateUrl: './event-guests.component.html',
  styleUrls: ['./event-guests.component.css']
})
export class EventGuestsComponent {
  @Input() formGroup!: FormArray;

  constructor(private fb: FormBuilder) {}

  addGuest(): void {
    this.formGroup.push(this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['']
    }));
  }

  removeGuest(index: number): void {
    this.formGroup.removeAt(index);
  }
}

