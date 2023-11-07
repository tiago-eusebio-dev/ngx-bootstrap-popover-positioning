import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PopoverComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
