import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[] = [];
  items2: MenuItem[] = [];

  constructor() { }

  ngOnInit() {


    this.items = [
      {
          label: 'Nueva factura',
          icon: 'pi pi-file',
          items: [
              {
                label: 'Ingreso',
                icon: 'pi pi-plus',
                routerLink: '/ingreso'

              },
              {
                label: 'Egreso',
                icon: 'pi pi-minus',
                routerLink: '/egreso'

              },
              {
                label: 'Pago',
                icon: 'pi pi-dollar',
                routerLink: '/pago'

              },
              {
                label: 'Nómina',
                icon: 'pi pi-credit-card',
                routerLink: '/nomina'

              },
              {
                label: 'traslado',
                icon: 'pi pi-car',
                routerLink: '/traslado'

              }
          ]
      },
      {
          label: 'Facturas existentes',
          icon: 'pi pi-table',

      }
  ];


  this.items2 = [
    {
      label: 'Cambiar tema',
      icon: 'pi pi-palette',

    },
    {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',

    }

];
  }

}
