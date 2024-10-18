import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DialogModule} from '@angular/cdk/dialog';
import {provideHttpClient} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(OverlayModule),
    importProvidersFrom(CdkAccordionModule),
    importProvidersFrom(DragDropModule),
    importProvidersFrom(ScrollingModule),
    importProvidersFrom(DialogModule),
    provideHttpClient(),
    provideRouter(routes), provideClientHydration()]
};
