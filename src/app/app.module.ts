import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WelcomePanelComponent } from './welcome-panel/welcome-panel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, WelcomePanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
