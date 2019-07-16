import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonalUiComponent } from './personal-ui/personal-ui.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { MessageFeedComponent } from './message-feed/message-feed.component';
import { MessageComponent } from './message/message.component';
import { MessageButtonDirective } from './message-button.directive';
import { EmailPopUpComponent } from './email-pop-up/email-pop-up.component';
import { DragableDirective } from './dragable.directive';
import { MessageDragHeaderComponent } from './message-drag-header/message-drag-header.component';
import { MessageOptionsComponent } from './message-options/message-options.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { ShrekAudioComponent } from './shrek-audio/shrek-audio.component';
import { PlayAudioDirective } from './play-audio.directive';
import { ExampleFormComponent } from './example-form/example-form.component';
import { UploadComponent } from './upload/upload.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalUiComponent,
    ProfileInfoComponent,
    MessageFeedComponent,
    MessageComponent,
    MessageButtonDirective,
    EmailPopUpComponent,
    DragableDirective,
    MessageDragHeaderComponent,
    MessageOptionsComponent,
    ComposeMessageComponent,
    ShrekAudioComponent,
    PlayAudioDirective,
    ExampleFormComponent,
    UploadComponent,
    SignUpComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }






