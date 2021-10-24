import { BrowserModule } from "@angular/platform-browser";
import { CartDetailComponent } from "./cartDetail.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CheckoutComponent } from "./checkout.component";
import { CounterDirective } from "./counter.directive";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StoreComponent } from "./store.component";

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  exports: [
    StoreComponent,
    CartDetailComponent,
    CheckoutComponent
  ]
})
export class StoreModule{}
