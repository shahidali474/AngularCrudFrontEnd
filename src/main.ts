import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AppModule)]
})
  .catch(err => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { importProvidersFrom } from '@angular/core';
// import { AppRoutingModule } from './app/app-routing.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
// import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(
//       BrowserModule,
//       AppRoutingModule,
//       FormsModule,
//       ReactiveFormsModule,
//       HttpClientModule,
//       RouterModule.forRoot(routes)
//     )
//   ]
// }).catch(err => console.error(err));