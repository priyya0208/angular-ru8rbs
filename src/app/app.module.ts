import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ViewOneComponent } from './view-one/view-one.component';
import { ViewTwoComponent } from './view-two/view-two.component';
import { ViewThreeComponent } from './view-three/view-three.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ViewOneComponent, ViewTwoComponent, ViewThreeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
