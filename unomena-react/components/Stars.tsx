import React from 'react';
import InstagramIcon from '../public/InstagramIcon';
import TikTokIcon from '../public/TikTokIcon';
import BluePlusIcon from '../public/BluePlusIcon';
import YellowPlusIcon from '../public/YellowPlusIcon';
import DarkNextIcon from '../public/DarkNextIcon';
import DarkBackIcon from '../public/DarkBackIcon';
import LilBabySignature from '../public/LilBabySignature';

const Card = ({
  title,
  name,
  backgroundImage,
  socialIcons,
  showSignature,
}: {
  title: string;
  name: string;
  backgroundImage: string;
  socialIcons: React.ReactNode[];
  showSignature: boolean;
}) => (
  <div
    className="relative bg-cover bg-center bg-gray-800 text-white rounded-[20px] overflow-hidden w-[382px] h-[690px]"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="p-4">
      <h4 className="text-xs font-medium">{title}</h4>
      <h2 className="text-2xl font-bold">{name}</h2>
    </div>
    <div className="absolute bottom-0 right-0 flex">
      {socialIcons.map((icon, index) => (
        <div key={`social-icon-${index}`} className="p-2 rounded-full">
          <span className="w-16 h-16 flex items-center justify-center">{icon}</span>
        </div>
      ))}
    </div>
    {showSignature && (
      <div className="absolute bottom-60 left-4 w-24">
        <LilBabySignature />
      </div>
    )}
  </div>
);

const Stars = () => {
  const cards = [
    {
      title: 'Athlete',
      name: 'Kevin Garnett',
      backgroundImage: '/Kevin.png',
      socialIcons: [<YellowPlusIcon />],
    },
    {
      title: 'Artist',
      name: 'Lil Baby',
      backgroundImage: '/LilBaby.png',
      socialIcons: [<InstagramIcon />, <TikTokIcon />],
    },
    {
      title: 'Athlete',
      name: 'Kyle Kuzma',
      backgroundImage: '/Kyle.png',
      socialIcons: [<BluePlusIcon />],
    },
  ];

  return (
    <div className="relative p-8 pl-[140px] mt-80">
      <h1 className="text-[30px] text-[#000000] font-medium mb-6">
        Deal flow from the biggest stars on the planet.
      </h1>
      <div className="flex space-x-4 overflow-x-auto">
        {cards.map((card) => (
          <Card
            key={card.name}
            title={card.title}
            name={card.name}
            backgroundImage={card.backgroundImage}
            socialIcons={card.socialIcons}
            showSignature={card.name === 'Lil Baby'}
          />
        ))}
        <div className="w-[72px] h-[690px] bg-[#1A1E23] rounded-[20px]"></div>
      </div>
      <div className="mt-6 flex justify-end space-x-2 pr-24">
        <DarkBackIcon />
        <DarkNextIcon />
      </div>
    </div>
  );
};

export default Stars;
