import { NgModule } from "@angular/core";

import {
    MatToolbarModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatRadioModule, 
    MatIconModule, 
    MatButtonModule
  } from '@angular/material';
  
  const MODULE = [
    MatToolbarModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatRadioModule,
    MatIconModule,
    MatButtonModule
  ]
  
  @NgModule({
    imports: MODULE,
    exports: MODULE,
  })
  export class MaterialModule { }
  