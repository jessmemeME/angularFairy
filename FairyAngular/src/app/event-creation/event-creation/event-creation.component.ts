import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent {
  eventForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.eventForm = this.fb.group({
      basicDetails: this.fb.group({
        eventName: ['', Validators.required],
        clientName: ['', Validators.required],
        coupleType: ['', Validators.required],
        partner1Name: ['', Validators.required],
        partner1Pronoun: ['', Validators.required],
        partner2Name: ['', Validators.required],
        partner2Pronoun: ['', Validators.required]
      }),
      ceremoniesDetails: this.fb.array([]),
      guestsList: this.fb.array([])
    });
  }

  get basicDetailsGroup(): FormGroup {
    return this.eventForm.get('basicDetails') as FormGroup;
  }

  get ceremoniesDetailsArray(): FormArray {
    return this.eventForm.get('ceremoniesDetails') as FormArray;
  }

  get guestsArray(): FormArray {
    return this.eventForm.get('guestsList') as FormArray;
  }
  /** ✅ Validación: No permitir avanzar si el array está vacío */
  isCeremoniesEmpty(): boolean {
    return this.ceremoniesDetailsArray.length === 0;
  }

  isGuestsEmpty(): boolean {
    return this.guestsArray.length === 0;
  }


  submitForm(): void {
    if (this.eventForm.valid) {
      console.log('Formulario enviado con éxito:', this.eventForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
