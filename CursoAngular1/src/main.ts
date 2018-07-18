import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* le decimos que 'AppComponent' va a ser el modulo raiz de nuestra aplicacion */ 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
