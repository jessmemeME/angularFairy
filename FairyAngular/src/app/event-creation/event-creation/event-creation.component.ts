import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent {
  basicDetailsGroup: FormGroup;
  ceremoniesDetailsGroup: FormGroup;
  guestsArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.basicDetailsGroup = this.fb.group({
      eventName: ['', Validators.required],
      clientName: ['', Validators.required],
      coupleType: ['', Validators.required]
    });

    this.ceremoniesDetailsGroup = this.fb.group({
      ceremoniesDetails: this.fb.array([])
    });

    this.guestsArray = this.fb.array([]);
  }

  submitForm() {
    if (this.basicDetailsGroup.valid && this.ceremoniesDetailsGroup.valid) {
      console.log('Formulario enviado:', {
        basicDetails: this.basicDetailsGroup.value,
        ceremoniesDetails: this.ceremoniesDetailsGroup.value,
        guests: this.guestsArray.value
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}
