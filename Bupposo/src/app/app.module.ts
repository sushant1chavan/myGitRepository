import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { HomeAfterLoginComponent } from './home-after-login/home-after-login.component';
import { RouterModule} from '@angular/router';
import { HelpComponent } from './help/help.component';
import { RegisterNowComponent }    from './register-now/register-now.component';

@NgModule ({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginFormComponent,
    HomeAfterLoginComponent,
    HelpComponent,
    RegisterNowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
         path: 'about-us',
         component: AboutUsComponent,
         
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'help',
        component: HelpComponent
     },
     {
       path: 'successfulLogin',
       component : HomeAfterLoginComponent
     },
     {
      path: '',
      component: MiddleComponent
    },
    {
     path: 'registerNow',
     component: RegisterNowComponent
   }
   ])
  ],
  providers: [LoginFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
