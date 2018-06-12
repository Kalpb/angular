import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeadreComponent } from './headre/headre.component';
import { FooterComponent } from './footer/footer.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpClientModule } from '@angular/common/http';

// Services
import { EmployeeServiceService } from '../app/employee-service.service';

// Routing
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadreComponent,
    FooterComponent,
    InterpolationComponent,
    PropertyComponent,
    ClassBindingComponent,
    TemplateReferenceComponent,
    ComponentInteractionComponent,
    PipesComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
