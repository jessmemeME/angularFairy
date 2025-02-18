import { Component, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-event-ceremonies',
  templateUrl: './event-ceremonies.component.html',
  styleUrl: './event-ceremonies.component.css'
})

export class EventCeremoniesComponent {
  @Input() formGroup!: FormGroup;

  get ceremoniesArray(): FormArray {
    return this.formGroup.get('ceremoniesDetails') as FormArray;
  }

  addCeremony(type: string) {
    const ceremonyGroup = this.formGroup.get('ceremoniesDetails') as FormArray;
    ceremonyGroup.push(new FormGroup({}));
  }
}
