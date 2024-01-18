import { Component, OnInit } from '@angular/core';
import { Medication } from '../../../shared/models/medication';
import { MedicationService } from 'src/app/core/services/medication-data/medication-service.service';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {

  public medications: Medication[] = [];

  constructor(private medService: MedicationService) {
  }

  ngOnInit(): void {
    this.medService.getMedications().subscribe((meds: Medication[]) => {
      this.medications = meds;
    });
  }

}
