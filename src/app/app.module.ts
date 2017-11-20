import { NgModule }                       from '@angular/core';
import { BrowserModule }                  from '@angular/platform-browser';
import { FormsModule }                    from '@angular/forms';
import { HttpClientModule }               from '@angular/common/http';
import { AppRoutingModule }               from './app.routes';
import { AppComponent }                   from './app.component';
import { PLATFORM_ID, APP_ID, Inject }    from '@angular/core';
import { isPlatformBrowser }              from '@angular/common';
import {HomeComponent}                    from './home/home.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'SSR' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'on the server' : 'in the browser';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
