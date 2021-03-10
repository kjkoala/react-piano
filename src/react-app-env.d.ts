/// <reference types="react-scripts" />

type AudioContextType = typeof AudioContext

interface Window extends Window {
  webkitAudioContext: AudioContext
}

type SoundfontType = typeof Soundfont;