import React from 'react';
import { Ornament } from './Ornament';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-islamic-900 text-white pt-16 pb-8 px-6 text-center bg-pattern">
      <div className="max-w-md mx-auto">
        <div className="my-8">
          <img
            src="/images/blue-rose-center.png"
            alt="Rose Ornament"
            className="w-24 h-24 object-contain mx-auto opacity-90 drop-shadow-md"
          />
        </div>

        <p className="font-sans text-sm leading-relaxed text-islamic-100 mb-8">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami <br />apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. <br /> Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>

        <p className="font-sans text-islamic-200 font-semibold mb-3"><i>Wassalamu’alaikum Warahmatullahi Wabarakatuh</i></p>
        <p className="font-sans text-sm leading-relaxed text-islamic-100 mt-4" style={{ fontSize: '9pt' }}>
          Kami yang berbahagia,
        </p>
        <p className="font-sans text-sm leading-relaxed text-islamic-100 font-semibold" style={{ fontSize: '9pt' }}>
          Kel. Bapak Muhamad Solihin, A.Md RO & Ibu Roudhotul Maghfiroh
        </p>
        <p className="font-sans text-sm leading-relaxed text-islamic-100 font-semibold" style={{ fontSize: '9pt' }}>
          Kel. Bapak Muhammad Faruq (Alm.) & Ibu Fatimah
        </p>
        <h2 className="font-script text-4xl text-[#FFF] mt-8 mb-12">Syarifah & Fariz</h2>

        <div className="border-t border-white/10 pt-6">
          <p className="text-[10px] tracking-widest uppercase text-gray-400">Created with Love by</p>
          <p className="text-xs font-bold text-white mt-1">RMS Invitation</p>
        </div>
      </div>
    </footer>
  );
};