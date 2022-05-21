import imageLaunchVehiclePortrait from '@images/technology/image-launch-vehicle-portrait.jpg';
import imageLaunchVehicleLandscape from '@images/technology/image-launch-vehicle-landscape.jpg';
import imageSpaceportPortrait from '@images/technology/image-spaceport-portrait.jpg';
import imageSpaceportLandscape from '@images/technology/image-spaceport-landscape.jpg';
import imageSpaceCapsulePortrait from '@images/technology/image-space-capsule-portrait.jpg';
import imageSpaceCapsuleLandscape from '@images/technology/image-space-capsule-landscape.jpg';

const {webp} = window.Modernizr;

export default [
  {
    name: 'Launch vehicle',
    images: {
      portrait: imageLaunchVehiclePortrait,
      landscape: imageLaunchVehicleLandscape,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: 'Spaceport',
    images: {
      portrait: imageSpaceportPortrait,
      landscape: imageSpaceportLandscape,
    },
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    name: 'Space capsule',
    images: {
      portrait: imageSpaceCapsulePortrait,
      landscape: imageSpaceCapsuleLandscape,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
