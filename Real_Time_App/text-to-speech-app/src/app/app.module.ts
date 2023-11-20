import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TextToSpeechService } from './services/text-to-speech.service';
import { VoiceRecognitionService } from './services/voice-recognition.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [TextToSpeechService,VoiceRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
