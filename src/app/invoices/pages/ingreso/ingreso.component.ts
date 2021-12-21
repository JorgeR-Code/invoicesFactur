import { Component, OnInit } from '@angular/core';
import { ValueFieldsService } from 'src/app/services/value-fields.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {

  codeMon: any[] = [];
  selectedCode: any[] = [];

  payMeth: any[] = [];
  payMethSelected: any[] = [];

  payForm: any[] = [];
  payFormSelected: any[] = [];

  cfdiUse: any[] = [];
  cfdiUseSelected: any[] = [];

  quantity: number = 1;
  price!: number;
  RFC!: string;
  autoclear: boolean = false;

  constructor(private valueFields: ValueFieldsService) { }

  ngOnInit() {

      this.codeMon = this.valueFields.getCodeMon();
      this.payMeth = this.valueFields.getPayMeth();
      this.payForm = this.valueFields.getPayForm();
      this.cfdiUse = this.valueFields.getCfdiUse();
    }
  }


