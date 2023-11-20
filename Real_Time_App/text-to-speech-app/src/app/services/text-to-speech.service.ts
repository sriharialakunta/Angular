import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  private synth: SpeechSynthesis;
    constructor() {
      this.synth = window.speechSynthesis;
    }
    speak(text: string): void {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        this.synth.speak(utterance);
      } else {
        console.error('Speech Synthesis API is not supported in this browser.');
      }
    }
}
