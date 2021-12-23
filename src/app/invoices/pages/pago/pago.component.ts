import { Component, OnInit } from '@angular/core';
import { ValueFieldsService } from 'src/app/services/value-fields.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {


  RFC!: string;
  autoclear: boolean = false;
  last_balance!: number;
  installment!: number;
  amount!: number;

  codeMon: any[] = [];
  selectedCode: any[] = [];
  payForm: any[] = [];
  payFormSelected: any[] = [];
  constructor(private valueFields: ValueFieldsService) { }

  ngOnInit(): void {
    this.payForm = this.valueFields.getPayForm();
    this.codeMon = this.valueFields.getCodeMon();
  }

}
