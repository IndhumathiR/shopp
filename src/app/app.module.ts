import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TopheaderComponent } from './topheader/topheader.component';
import { BottomfooterComponent } from './bottomfooter/bottomfooter.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopheaderComponent,
    BottomfooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([

  {path: 'header', component: HeaderComponent},
   {path: 'topheader', component: TopheaderComponent},
    {path: 'content', component: ContentComponent},


      {path: 'footer', component: FooterComponent},
      {path: 'bottomfooter', component: BottomfooterComponent}

     
    
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
