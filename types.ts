import React from 'react';

export interface GuestMessage {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

export interface CoupleProps {
  name: string;
  childOrder: string;
  father: string;
  mother: string;
  photoUrl: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}