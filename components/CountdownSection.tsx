
import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { CalendarPlus } from 'lucide-react';
import { Section } from './Section';

export const CountdownSection: React.FC = () => {
    const addToCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Syarifah+%26+Fariz&dates=20260328T080000/20260328T130000&details=Walimatul+Ursy+Syarifah+%26+Fariz&location=Jl.+Merpati+Tengah+I+no.+23+(Optik+Mishbaach)";

    return (
        <div className="relative bg-[#BDE8F5] text-[#0F2854] py-16 bg-cover bg-center"
            style={{ backgroundImage: 'linear-gradient(rgba(189, 232, 245, 0.85), rgba(189, 232, 245, 0.85)), url("/images/blue-rose-bg.png")' }}>

            <Section className="flex flex-col items-center">
                <h2 className="font-script text-4xl text-center text-[#0F2854] mb-6">Menuju Hari Bahagia</h2>

                <CountdownTimer targetDate="2026-03-28T08:00:00+07:00" />

                <a
                    href={addToCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 group relative px-8 py-3 bg-[#0F2854] text-white rounded-full font-bold font-sans shadow-lg flex items-center gap-2 hover:bg-[#0c204a] transition-colors"
                >
                    <CalendarPlus size={20} />
                    <span>Simpan Tanggal</span>
                </a>
            </Section>
        </div>
    );
};
