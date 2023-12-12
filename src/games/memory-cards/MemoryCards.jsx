import catOne from "../../../public/memory-cards/cat1.webp";
import catTwo from "../../../public/memory-cards/cat2.webp";
import dino from "../../../public/memory-cards/dino.webp";
import star from "../../../public/memory-cards/star.webp";
import monkey from "../../../public/memory-cards/monkey.webp";
import owl from "../../../public/memory-cards/owl.webp";
import panda from "../../../public/memory-cards/panda.webp";
import koala from "../../../public/memory-cards/koala.webp";
import elephant from "../../../public/memory-cards/elephant.webp";
import cheetah from "../../../public/memory-cards/cheetah.png";
import ram from "../../../public/memory-cards/ram.png";
import rino from "../../../public/memory-cards/rino.png";
import cow from "../../../public/memory-cards/cow.png";
import dogOne from "../../../public/memory-cards/dog1.jpg";
import dogTwo from "../../../public/memory-cards/dog2.webp";
import dogThree from "../../../public/memory-cards/dog3.png";
import giraffe from "../../../public/memory-cards/giraffe.png";
import dragon from "../../../public/memory-cards/dragon.jpg";
import MemoryCard from "./MemoryCard";

const MEMORY_IMAGES = [
  catOne,
  catTwo,
  dino,
  star,
  monkey,
  owl,
  panda,
  koala,
  elephant,
  cheetah,
  ram,
  rino,
  cow,
  dogOne,
  dogTwo,
  dogThree,
  giraffe,
  dragon,
];

function MemoryCards() {
  return (
    <div>
      {MEMORY_IMAGES.map((img) => (
        <MemoryCard key={img} imgSrc={img} />
      ))}
    </div>
  );
}

export default MemoryCards;
