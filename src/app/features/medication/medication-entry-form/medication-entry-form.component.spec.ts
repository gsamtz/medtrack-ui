import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationEntryFormComponent } from './medication-entry-form.component';

describe('MedicationEntryFormComponent', () => {
  let component: MedicationEntryFormComponent;
  let fixture: ComponentFixture<MedicationEntryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicationEntryFormComponent]
    });
    fixture = TestBed.createComponent(MedicationEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
