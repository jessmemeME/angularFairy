import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProviderComponentComponent } from './provider-component/provider-component.component';
import { ListComponent } from './component/list/list.component';
import { CreateComponent } from './component/create/create.component';
import { UpdateComponent } from './component/update/update.component';
import {RouteModule} from './routes/route/route.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    ProviderComponentComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    NgxChartsModule,
    CommonModule,
    RouteModule,
    FormsModule,
  ]
})
export class ProvidersModule { }
