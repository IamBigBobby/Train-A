import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app.routes';
import { appReducer } from './core/store/app.reducer';
import { initialAppState } from './core/store/app-state';
import { StationEffectService } from './core/store/admin-store/effects/station-effect.service';
import { UserEffectService } from '@core/services/store/user-store/effects/user-effect.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    NG_EVENT_PLUGINS,
    provideStore(appReducer, { initialState: initialAppState }),
    provideEffects([StationEffectService, UserEffectService]),
  ],
};
