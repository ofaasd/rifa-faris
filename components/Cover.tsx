import React from 'react';
import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import { Ornament } from './Ornament';

interface CoverProps {
  guestName: string;
  onOpen: () => void;
}

export const Cover: React.FC<CoverProps> = ({ guestName, onOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#BDE8F5] text-white text-center p-6 bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(rgba(189, 232, 245, 0.85), rgba(189, 232, 245, 0.85)), url("/images/blue-rose-bg.png")' }}>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >

        <h2 className="font-script text-5xl text-[#0F2854] mb-10">Walimatul Ursy</h2>

        <h1 className="font-script text-6xl md:text-7xl text-[#0F2854] mb-2">Syarifah</h1>
        <div className="font-script text-3xl text-[#0F2854] my-2">&</div>
        <h1 className="font-script text-6xl md:text-7xl text-[#0F2854] mb-2">Fariz</h1>

        <div className="my-8">
          <img
            src="/images/blue-rose-center.png"
            alt="Rose Ornament"
            className="w-24 h-24 object-contain mx-auto opacity-90 drop-shadow-md"
          />
        </div>

        <div className="mt-auto mb-6 w-full max-w-xs">
          <p className="text-sm font-sans text-[#0F2854] mb-3 font-medium">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <div className="bg-[#0F2854] text-white px-8 py-3 rounded-lg shadow-xl mb-4">
            <h2 className="text-lg font-bold font-sans capitalize">{guestName}</h2>
          </div>

          <p className="text-xs text-[#0F2854] italic mb-8 mx-auto leading-relaxed opacity-80">
            Mohon maaf apabila ada kesalahan penulisan nama dan gelar
          </p>

          <motion.button
            onClick={onOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full px-6 py-3 bg-[#0F2854] text-white rounded-full font-bold font-sans shadow-lg flex items-center justify-center gap-2 hover:bg-[#0c204a] transition-colors"
          >
            <MailOpen size={18} />
            <span>Buka Undangan</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};