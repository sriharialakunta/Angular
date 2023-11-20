import { Component,Injectable } from '@angular/core';
import { VoiceRecognitionService } from './services/voice-recognition.service';
import { TextToSpeechService } from './services/text-to-speech.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text-to-speech-app';
  textToRead: string = '';
  text: string='';

  constructor(
    private textToSpeechService: TextToSpeechService,
    public speechToTextService : VoiceRecognitionService
    ) { 
      this.speechToTextService.init()
  }
  
  speakText(): void {
    this.textToSpeechService.speak(this.textToRead);
  }
  startService(){
    this.speechToTextService.start()
  }
  stopService(){
    this.speechToTextService.stop()
  }
}