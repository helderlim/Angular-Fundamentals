import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  //pipe de componente ou diretiva -> declarations
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  //importar outros módulos -> imports
  imports: [
    BrowserModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  //providers é para declarar services
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
