
import { Component, OnInit } from '@angular/core';
import { FhirService } from '../fhir.service';

@Component({
  selector: 'app-fhir-data',
  templateUrl: './fhir-data.component.html',
  styleUrls: ['./fhir-data.component.css'],
})
export class FhirDataComponent implements OnInit {
  patients: any;
  conditions: any;

  constructor(private fhirService: FhirService) {}

  ngOnInit() {
    this.fhirService.getPatients().subscribe((data) => (this.patients = data));
    this.fhirService.getConditions().subscribe((data) => (this.conditions = data));
  }
}
