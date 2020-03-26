import { enableProdMode, PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*
PALTFORM 
MODULE
APP
*/

platformBrowserDynamic().bootstrapModule(AppModule)
//.then( () => alert(1) )  // 
.catch(err => console.log(err));
