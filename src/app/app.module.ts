import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindMeRoomComponent } from './find-me-room/find-me-room.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PromoteComponent } from './promote/promote.component';
import { ShiftHomeComponent } from './shift-home/shift-home.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    WishListComponent,
    LogInComponent,
    AddPropertyComponent,
    PromoteComponent,
    FindMeRoomComponent,
    ShiftHomeComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
