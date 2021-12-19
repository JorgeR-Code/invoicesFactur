import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {ButtonModule} from 'primeng/button';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MenubarModule,
    InputTextModule,
    FieldsetModule,
    AvatarModule,
    AvatarGroupModule,
    TieredMenuModule,
    ButtonModule
  ]
})
export class PrimeNGModule { }
