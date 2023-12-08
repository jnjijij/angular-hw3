// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Додана ця лінія
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CarService } from './car.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    PostListComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Додана ця лінія
    HttpClientInMemoryWebApiModule.forRoot(CarService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
