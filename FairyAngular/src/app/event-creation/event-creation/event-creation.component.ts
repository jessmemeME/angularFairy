import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent {
  eventForm: FormGroup;
  pronouns: string[] = ['él', 'ella', 'elle'];
  couplesTypes: string[] = ['Pareja heterosexual', 'Pareja homosexual', 'Pareja no binaria'];
  ceremonies: string[] = ['Civil', 'Religiosa', 'Brindis', 'Viaje', 'Despedida'];
  selectedCeremonies: FormArray;
  //selectedCeremonies: string[] = [];

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      basicDetails: this.fb.group({
        eventName: ['', Validators.required],
        clientName: ['', Validators.required],
        coupleType: ['', Validators.required],
        couple1: this.fb.group({
          name_uno: ['', Validators.required],
          pronoun_uno: ['', Validators.required],
          role_uno: ['', Validators.required]
        }),
        couple2: this.fb.group({
          name_dos: ['', Validators.required],
          pronoun_dos: ['', Validators.required],
          role_dos: ['', Validators.required]
        }),
        guests: this.fb.group({
          guestAmountType: ['singleNumber', Validators.required],  // Se añadió este control
          guestNumber: [''],
          guestRange: this.fb.group({
            minGuests: [''],
            maxGuests: ['']
          })
        })
        
      }),
      ceremoniesDetails: this.fb.array([]),
      guestsList: this.fb.array([])
    });

    this.selectedCeremonies = this.fb.array([]);
  }

  get basicDetailsGroup(): FormGroup {
    return this.eventForm.get('basicDetails') as FormGroup;
  }

  get ceremoniesDetailsGroup(): FormGroup {
    return this.eventForm.get('ceremoniesDetails') as FormGroup;
  }

  get guestsArray(): FormArray {
    return this.eventForm.get('guestsList') as FormArray;
  }

  addCeremony(type: string) {
    const ceremonyGroup = this.fb.group({
      type: [type],
      details: this.fb.group({
        date: [''],
        startTime: [''],
        endTime: [''],
        place: [''],
        venue: [''],
        officiant: [''],
        cost: [''],
        decoration: this.fb.array([])
      })
    });
    this.selectedCeremonies.push(ceremonyGroup);
  }

  addGuest() {
    this.guestsArray.push(this.fb.group({
      number: [this.guestsArray.length + 1],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: [''],
      pronoun: [''],
      mealType: [''],
      ageRange: this.fb.group({
        minAge: [''],
        maxAge: ['']
      }),
      invitationNumber: [''],
      tableNumber: [''],
      allergies: [''],
      role: [''],
      ceremonies: this.fb.group({
        civil: [false],
        religious: [false],
        brindis: [false]
      })
    }));
  }

  submitForm() {
    if (this.eventForm.valid) {
      console.log(this.eventForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
