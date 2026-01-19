import React, { useState, useEffect, useRef } from 'react';
import { Cover } from './components/Cover';
import { CoupleInfo } from './components/CoupleInfo';
import { EventDetails } from './components/EventDetails';
import { GuestBook } from './components/GuestBook';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { CountdownSection } from './components/CountdownSection';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Extract 'to' parameter from URL for guest name
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to');
    if (name) {
      setGuestName(decodeURIComponent(name));
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setIsPlaying(true);
    // Play audio when user interacts
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => {
          console.log("Audio play failed:", e);
          setIsPlaying(false);
        });
      }
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error(e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-islamic-50 overflow-hidden relative">
      {/* Audio Element with reliable source (Kevin MacLeod - Mirage via Wikimedia) */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music/bg.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="cover"
            exit={{ y: -1000, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <Cover guestName={guestName} onOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
      >
        <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

        <main className="max-w-md mx-auto bg-white shadow-2xl min-h-screen relative overflow-hidden">
          {/* Background pattern overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-repeat z-0"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}>
          </div>

          <div className="relative z-10">
            <CoupleInfo />
            <CountdownSection />
            <EventDetails />
            <GuestBook />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;