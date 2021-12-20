import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {

  codeMon: any[] = [];
  selectedCode: any[] = [];

  payMeth!: any[];
  payMethSelected!: any[];

  payForm!: any[];
  payFormSelected!: any[];

  cfdiUse!: any[];
  cfdiUseSelected!: any[];

  quantity: number = 1;
  price!: number;

  constructor() { }

  ngOnInit() {
      this.codeMon = [
        {name: 'MXN'},
        {name: 'USD'},
        {name: 'CAD'},
        {name: 'BRL'}
      ];

      this.payMeth = [
        {name: 'PUE'},
        {name: 'PDD'}
      ];


      this.payForm = [
        {name: '01'},
        {name: '02'},
        {name: '03'},
        {name: '04'},
        {name: '05'},
        {name: '06'},
        {name: '08'},
        {name: '12'},
        {name: '13'},
        {name: '14'},
        {name: '15'},
        {name: '17'},
        {name: '23'},
        {name: '24'},
        {name: '25'},
        {name: '26'},
        {name: '27'},
        {name: '28'},
        {name: '29'},
        {name: '30'},
        {name: '31'},
        {name: '99'}
      ]

      this.cfdiUse = [
        {name: 'G01'},
        {name: 'G02'},
        {name: 'G03'},
        {name: 'I01'},
        {name: 'I02'},
        {name: 'I03'},
        {name: 'I04'},
        {name: 'I05'},
        {name: 'I06'},
        {name: 'I07'},
        {name: 'I08'},
        {name: 'D01'},
        {name: 'D02'},
        {name: 'D03'},
        {name: 'D04'},
        {name: 'D05'},
        {name: 'D06'},
        {name: 'D07'},
        {name: 'D08'},
        {name: 'D09'},
        {name: 'D10'},
        {name: 'P01'}
      ]
    }
  }


