import imageDouglasHurleyPng from '@images/crew/image-douglas-hurley.png';
import imageDouglasHurleyWebp from '@images/crew/image-douglas-hurley.webp';
import imageMarkShuttleworthPng from '@images/crew/image-mark-shuttleworth.png';
import imageMarkShuttleworthWebp from '@images/crew/image-mark-shuttleworth.webp';
import imageVictorGloverPng from '@images/crew/image-victor-glover.png';
import imageVictorGloverWebp from '@images/crew/image-victor-glover.webp';
import imageAnnoushehAnsariPng from '@images/crew/image-anousheh-ansari.png';
import imageAnnoushehAnsariWebp from '@images/crew/image-anousheh-ansari.webp';

const {webp} = window.Modernizr;

export default [
  {
    role: 'Commander',
    name: 'Douglas Hurley',
    image: webp ? imageDouglasHurleyWebp : imageDouglasHurleyPng,
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    name: 'Mark Shuttleworth',
    role: 'Mission Specialist',
    image: webp ? imageMarkShuttleworthWebp : imageMarkShuttleworthPng,
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    role: 'Pilot',
    name: 'Victor Glover',
    image: webp ? imageVictorGloverWebp : imageVictorGloverPng,
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  {
    name: 'Anousheh Ansari',
    role: 'Flight Engineer',
    image: webp ? imageAnnoushehAnsariWebp : imageAnnoushehAnsariPng,
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
];
