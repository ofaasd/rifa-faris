import React from 'react';
import { Section } from './Section';
import { Calendar, Clock, MapPin } from 'lucide-react';


export const EventDetails: React.FC = () => {
  return (
    <div className="relative bg-[#BDE8F5] text-[#0F2854] py-12 bg-pattern">
      <div className="absolute inset-0 bg-[#BDE8F5] z-0"></div>
      <div className="relative z-10">
        <Section>

          <h2 className="font-script text-4xl text-center text-[#0F2854] mb-10">Rangkaian Acara</h2>

          {/* Akad Nikah */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#0F2854]/10 rounded-2xl p-6 mb-6 text-center shadow-xl">
            <h3 className="font-arabic text-3xl text-[#0F2854] mb-2">Akad Nikah</h3>
            <div className="flex justify-center gap-4 text-sm text-[#0F2854] mb-4 font-sans">
              <div className="flex items-center gap-1"><Calendar size={14} /> 28 Maret 2026</div>
            </div>
            <div className="flex justify-center gap-4 text-sm text-[#0F2854] mb-4 font-sans">
              <div className="flex items-center gap-1"><Clock size={14} /> 08:00 WIB</div>
            </div>
            <p className="text-sm text-[#0F2854] font-sans leading-relaxed">
              Jl. Merpati Tengah I no. 23 <br />
              (Optik Mishbaach)
            </p>
            <a
              href="https://maps.app.goo.gl/6UpZATPv79UM5Y2j6?g_st=aw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-islamic-700/20 text-[#0F2854] rounded-full text-xs font-bold hover:bg-islamic-700/30 transition-colors"
            >
              <MapPin size={14} /> Lihat Lokasi
            </a>
          </div>



          {/* Resepsi */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#0F2854]/10 rounded-2xl p-6 text-center shadow-xl">
            <h3 className="font-arabic text-3xl text-[#0F2854] mb-2">Resepsi</h3>
            <div className="flex justify-center gap-4 text-sm text-[#0F2854] mb-4 font-sans">
              <div className="flex items-center gap-1"><Calendar size={14} /> 28 Maret 2026</div>
            </div>
            <div className="flex justify-center gap-4 text-sm text-[#0F2854] mb-4 font-sans">
              <div className="flex items-center gap-1"><Clock size={14} /> 11:00 - 13.00 WIB</div>
            </div>
            <p className="text-sm text-[#0F2854] font-sans leading-relaxed">
              Jl. Merpati Tengah I no. 23 <br />
              (Optik Mishbaach)
            </p>
            <a
              href="https://maps.app.goo.gl/6UpZATPv79UM5Y2j6?g_st=aw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-islamic-700/20 text-[#0F2854] rounded-full text-xs font-bold hover:bg-islamic-700/30 transition-colors"
            >
              <MapPin size={14} /> Lihat Lokasi
            </a>
          </div>
        </Section>
      </div >
    </div >
  );
};