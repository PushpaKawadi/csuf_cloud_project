class VoiceInput {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.chatInput = document.getElementById('chatInput');
    this.voiceBtn = document.getElementById('voiceBtn');
    
    this.initSpeechRecognition();
    this.setupEventListeners();
  }

  initSpeechRecognition() {
    // Check for browser support
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new webkitSpeechRecognition();
    } else if ('SpeechRecognition' in window) {
      this.recognition = new SpeechRecognition();
    } else {
      this.showStatus('Speech recognition not supported');
      this.voiceBtn.style.display = 'none';
      return;
    }

    // Configure recognition
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    // Event handlers
    this.recognition.onstart = () => {
      this.isListening = true;
      this.voiceBtn.classList.add('recording');
      this.chatInput.placeholder = 'Listening...';
    };

    this.recognition.onresult = (event) => {
      let transcript = '';
      let isFinal = false;

      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          isFinal = true;
        }
      }

      // Update input with interim results
      this.chatInput.value = transcript;

      // If final result, stop listening
      if (isFinal) {
        this.stopListening();
      }
    };

    this.recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      this.stopListening();
      
      // Show user-friendly error messages
      switch(event.error) {
        case 'no-speech':
          this.showStatus('No speech detected. Try again.');
          break;
        case 'audio-capture':
          this.showStatus('Microphone not available.');
          break;
        case 'not-allowed':
          this.showStatus('Microphone permission denied.');
          break;
        default:
          this.showStatus('Speech recognition error. Try again.');
      }
    };

    this.recognition.onend = () => {
      this.stopListening();
    };
  }

  setupEventListeners() {
    this.voiceBtn.addEventListener('click', () => {
      if (this.isListening) {
        this.stopListening();
      } else {
        this.startListening();
      }
    });
  }

  startListening() {
    if (!this.recognition) return;
    
    try {
      this.recognition.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  }

  stopListening() {
    if (!this.recognition) return;
    
    this.isListening = false;
    this.voiceBtn.classList.remove('recording', 'processing');
    this.chatInput.placeholder = 'Type a message...';
    
    try {
      this.recognition.stop();
    } catch (error) {
      console.error('Error stopping speech recognition:', error);
    }
  }

  showStatus(message) {
    // Temporarily show status in placeholder
    const originalPlaceholder = this.chatInput.placeholder;
    this.chatInput.placeholder = message;
    
    setTimeout(() => {
      this.chatInput.placeholder = originalPlaceholder;
    }, 3000);
  }
}