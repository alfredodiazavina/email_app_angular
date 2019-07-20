import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonalUiComponent } from './components/personal-ui/personal-ui.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { MessageFeedComponent } from './components/message-feed/message-feed.component';
import { MessageComponent } from './components/message/message.component';
import { MessageButtonDirective } from './directives/msgBtn/message-button.directive';
import { EmailPopUpComponent } from './components/email-pop-up/email-pop-up.component';
import { DragableDirective } from './directives/drag/dragable.directive';
import { MessageDragHeaderComponent } from './components/message-drag-header/message-drag-header.component';
import { MessageOptionsComponent } from './components/message-options/message-options.component';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { ShrekAudioComponent } from './components/shrek-audio/shrek-audio.component';
import { PlayAudioDirective } from './directives/audio/play-audio.directive';
import { ExampleFormComponent } from './components/example-form/example-form.component';
import { UploadComponent } from './components/upload/upload.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

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






