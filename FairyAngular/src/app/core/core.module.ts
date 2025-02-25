import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
// Asegúrate de importar los servicios y guards
import * as services from './services'; 
import * as guards from './guards';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ...Object.values(services),
    ...Object.values(guards)
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule ya ha sido cargado. ¡Importarlo solo en AppModule!');
    }
  }
}
