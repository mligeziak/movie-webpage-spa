import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DynamicSearchBoxComponent } from './elements/dynamic-search-box/dynamic-search-box.component';
import { DynamicSearchBoxItemComponent } from './elements/dynamic-search-box/dynamic-search-box-item/dynamic-search-box-item.component';
import { MovieComponent } from './movie/movie.component';
import { UserSignupComponent } from './user/signup/user.signup.component';
import { UserLoginComponent } from './user/login/user.login.component';
import { UserLogoutComponent } from './user/logout/user.logout.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        DynamicSearchBoxComponent,
        DynamicSearchBoxItemComponent,
        MovieComponent,
        UserSignupComponent,
        UserLoginComponent,
        UserLogoutComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }