import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PromoteComponent } from './promote/promote.component';
import { FindMeRoomComponent } from './find-me-room/find-me-room.component';
import { ShiftHomeComponent } from './shift-home/shift-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wish-list', component: WishListComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'promote', component: PromoteComponent },
  { path: 'find-me-room', component: FindMeRoomComponent },
  { path: 'shift-home', component: ShiftHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
