import { Component, OnInit } from '@angular/core';
import { ValueFieldsService } from 'src/app/services/value-fields.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.scss']
})
export class EgresoComponent implements OnInit {


  codeMon: any[] = [];
  selectedCode: any[] = [];

  payForm: any[] = [];
  payFormSelected: any[] = [];

  taxIncluded: Boolean = false;
  price!: number;
  RFC!: string;
  autoclear: boolean = false;

  constructor(private valueFields: ValueFieldsService) { }

  ngOnInit(): void {
    this.codeMon = this.valueFields.getCodeMon();
    this.payForm = this.valueFields.getPayForm();
  }

}
