import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MenubarModule,
    FieldsetModule,
    AvatarModule,
    AvatarGroupModule,
    TieredMenuModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimeNGModule { }
