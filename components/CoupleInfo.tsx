import React from 'react';
import { Section } from './Section';
import { Ornament } from './Ornament';

export const CoupleInfo: React.FC = () => {
  return (
    <Section className="text-center pt-10 pb-10">
      <div className="mb-10">
        <p className="font-sans text-islamic-800 mb-4 font-semibold">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </p>
        {/* <div className="my-8">
          <img
            src="/images/blue-rose-center.png"
            alt="Rose Ornament"
            className="w-24 h-24 object-contain mx-auto opacity-90 drop-shadow-md"
          />
        </div> */}
        <p className="font-sans text-gray-800 mb-4 font-semibold" style={{ fontSize: '10pt' }}>
          Maha Suci Allah SWT <br />yang telah menciptakan makhluk-Nya berpasang-pasangan
          <br />
          ya Allah, perkenankanlah dan Ridhoilah putra-putri kami :
        </p>

        {/* <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6 italic">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
        </p>
        <p className="font-semibold text-islamic-700 text-sm">(QS. Ar-Rum: 21)</p> */}
      </div>



      {/* Bride */}
      <div className="my-10">
        <div className="relative w-40 h-60 mx-auto mb-6">
          <div className="absolute inset-0 rounded-2xl border-2 border-islamic-gold/50 p-1">
            <img
              src="/images/bride.jpg"
              alt="Syarifah"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
        <h2 className="font-script text-4xl text-islamic-800 mb-2">Syarifah Mumtazah <br />( Syarifah )</h2>
        <p className="font-sans text-sm text-gray-600 font-medium">Putri dari</p>
        <p className="font-sans text-sm text-gray-800 font-bold mt-1">Bapak Muhamad Solihin, A.Md RO <br /> & Ibu Roudhotul Maghfiroh</p>
      </div>

      <div className="font-script text-4xl text-islamic-gold my-4">&</div>

      {/* Groom */}
      <div className="my-10">
        <div className="relative w-40 h-60 mx-auto mb-6">
          <div className="absolute inset-0 rounded-2xl border-2 border-islamic-gold/50 p-1">
            <img
              src="/images/groom.jpg"
              alt="Achmad"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
        <h2 className="font-script text-4xl text-islamic-800 mb-2">Ahmad Fariz Ridwan <br /> ( Fariz ) </h2>
        <p className="font-sans text-sm text-gray-600 font-medium">Putra dari</p>
        <p className="font-sans text-sm text-gray-800 font-bold mt-1">Bapak Muhammad Faruq (Alm.) <br /> & Ibu Fatimah</p>
      </div>

      <div className="my-8">
        <img
          src="/images/blue-rose-center.png"
          alt="Rose Ornament"
          className="w-24 h-24 object-contain mx-auto opacity-90 drop-shadow-md"
        />
      </div>
    </Section>
  );
};