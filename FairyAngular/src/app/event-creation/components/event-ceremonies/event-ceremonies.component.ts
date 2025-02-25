import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-ceremonies',
  templateUrl: './event-ceremonies.component.html',
  styleUrls: ['./event-ceremonies.component.css']
})
export class EventCeremoniesComponent implements OnInit {
  @Input() formGroup!: FormArray<FormGroup>;
  ceremonies: string[] = ['Civil', 'Religiosa', 'Brindis', 'Viaje', 'Despedida'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.formGroup) {
      throw new Error('❌ FormArray no ha sido inicializado correctamente en EventCeremoniesComponent.');
    }
  }

  /** ✅ Agrega o elimina una ceremonia según el checkbox */
  toggleCeremony(type: string, isChecked: boolean): void {
    if (isChecked) {
      this.formGroup.push(this.createCeremonyForm(type));
    } else {
      this.removeCeremony(type);
    }
  }

  /** ✅ Crea un nuevo FormGroup para una ceremonia */
  private createCeremonyForm(type: string): FormGroup {
    return this.fb.group({
      type: [type, Validators.required],
      date: ['', Validators.required]
    });
  }

  /** ✅ Elimina una ceremonia específica (cambio a `public`) */
  public removeCeremony(type: string): void {
    const index = this.formGroup.controls.findIndex((ceremony) => ceremony.value.type === type);
    if (index !== -1) {
      this.formGroup.removeAt(index);
    }
  }
}
