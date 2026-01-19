import React, { useState, useEffect, useRef } from 'react';
import { Music, Pause } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 backdrop-blur-md transition-all duration-500 ${
        isPlaying ? 'bg-islamic-600/90 rotate-[360deg]' : 'bg-gray-800/80'
      }`}
    >
      {isPlaying ? (
        <Pause className="text-white w-5 h-5" />
      ) : (
        <Music className="text-white w-5 h-5" />
      )}
      {/* Pulse animation ring */}
      {isPlaying && (
        <span className="absolute inline-flex h-full w-full rounded-full bg-islamic-500 opacity-20 animate-ping"></span>
      )}
    </button>
  );
};