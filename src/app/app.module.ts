import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalUiComponent } from './personal-ui/personal-ui.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { MessageFeedComponent } from './message-feed/message-feed.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalUiComponent,
    ProfileInfoComponent,
    MessageFeedComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
