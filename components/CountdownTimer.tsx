
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    targetDate: string; // ISO format or string capable of being parsed by Date
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        const value = timeLeft[interval as keyof TimeLeft];
        return (
            <div key={interval} className="flex flex-col items-center bg-[#0F2854] text-white rounded-lg p-2 min-w-[70px] shadow-lg">
                <span className="text-2xl font-bold font-mono">
                    {value < 10 ? `0${value}` : value}
                </span>
                <span className="text-xs uppercase tracking-wider mt-1">{interval}</span>
            </div>
        );
    });

    return (
        <div className="flex justify-center gap-2 md:gap-4 my-8">
            {timerComponents}
        </div>
    );
};
