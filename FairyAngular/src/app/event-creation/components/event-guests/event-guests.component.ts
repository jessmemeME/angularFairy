import { Component, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-event-guests',
  templateUrl: './event-guests.component.html',
  styleUrls: ['./event-guests.component.css']
})
export class EventGuestsComponent {
  @Input() formGroup!: FormGroup;

  get guestsArray(): FormArray {
    return this.formGroup.get('guestsArray') as FormArray;
  }

  addGuest() {
    this.guestsArray.push(new FormGroup({}));
  }
}
