import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { UserSignupComponent } from './user/signup/user.signup.component';

export const routes: Routes = [
  {path: '',                component: HomeComponent      },
  {path: 'home',            component: HomeComponent      },
  {path: '*',               component: HomeComponent      },
  {path: 'about',           component: AboutComponent     },
  {path: 'movie/:imdbid',   component: MovieComponent     },
  {path: 'user/signup',     component: UserSignupComponent}
];
