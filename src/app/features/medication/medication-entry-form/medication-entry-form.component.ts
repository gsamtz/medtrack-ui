import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medication-entry-form',
  templateUrl: './medication-entry-form.component.html',
  styleUrls: ['./medication-entry-form.component.css']
})
export class MedicationEntryFormComponent {
  
  public medicationEntryForm = this.formBuilder.group({
    name: ['', Validators.required],
    dosage: ['', [Validators.required, Validators.maxLength(3000)]],
    unit: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.medicationEntryForm.value);
    this.medicationEntryForm.reset();
  }
}