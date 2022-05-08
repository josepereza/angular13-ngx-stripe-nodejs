import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { NgxStripeModule } from 'ngx-stripe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51KwttKJhfdXMP2PM1eyZwmyTnW37LyaYzXB4xe0Hn13Y1NHPNUj4FVlVg4NoGLym1SO38P5WJrM0UbgWbMKScooI0000eFuVzO'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
