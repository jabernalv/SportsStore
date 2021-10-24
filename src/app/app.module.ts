import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreFirstGuard } from './store/storeFirst.guard';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule,
  ],
  providers: [
    StoreFirstGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
