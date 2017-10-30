import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { SortPipe } from './sort.pipe';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HotComponent,
    NewComponent,
    TopComponent,
    HomeComponent,
    SortPipe,
    PostDetailComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
