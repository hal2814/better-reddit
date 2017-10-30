import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { TopComponent } from './top/top.component';
import { PostDetailComponent }   from './post-detail/post-detail.component';
import { UserDetailComponent }   from './user-detail/user-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
     path: 'hot',
     component: HotComponent
   },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'top',
    component: TopComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'users/:username',
    component: UserDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
