import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled', // ✅ Activa el desplazamiento a fragmentos (#id)
        scrollPositionRestoration: 'enabled', // ✅ Guarda la posición del scroll
      })
    ),
    provideHttpClient(withFetch()),
    provideAnimations(),
    importProvidersFrom(
      ToastrModule.forRoot({
        timeOut: 3000, // Configuración global del toastr
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      })
    ),
    provideClientHydration(),
  ],
};
