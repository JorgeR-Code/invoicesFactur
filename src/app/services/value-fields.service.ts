import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueFieldsService {


  private codeMon: any[] = [
    {name: 'MXN'},
    {name: 'USD'},
    {name: 'CAD'},
    {name: 'BRL'}
  ];
  private payMeth: any[] = [
    {name: 'PUE'},
    {name: 'PDD'}
  ];

  private payForm: any[] = [
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
  ];

  private cfdiUse: any[] = [
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
  ];


  public codeMon$ = this.codeMon;
  public payMeth$ = this.payMeth;
  public payForm$ = this.payForm;
  public cfdiUse$ = this.cfdiUse;

  constructor() { }

  getCodeMon(){
    return this.codeMon;
  };

  getPayMeth(){
    return this.payMeth;
  };

  getPayForm(){
    return this.payForm;
  };

  getCfdiUse(){
    return this.cfdiUse;
  }
}
