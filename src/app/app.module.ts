import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component';
import { UserProfileService } from './services/user-profile.service';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'details/:name', component: DetailsComponent },
  { path: 'user', component: UserComponent },
  { path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  { path: '**', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailsComponent,
    UserComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]
})

export class AppModule { }
