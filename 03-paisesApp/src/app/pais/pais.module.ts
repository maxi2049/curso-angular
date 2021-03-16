import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisService } from './services/pais.service';



@NgModule({
  declarations: [
    PorCapitalComponent, 
    PorPaisComponent, 
    PorRegionComponent, 
    VerPaisComponent
  ],
  exports: [
    PorCapitalComponent, 
    PorPaisComponent, 
    PorRegionComponent, 
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    PaisService
  ]
})
export class PaisModule { }
