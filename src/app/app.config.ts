import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Zone.js change detection with event coalescing
    provideRouter(routes), // Routing configuration
    provideClientHydration() // Client hydration for Angular Universal
  ]
};
