import { Card } from 'pixel-retroui';
import C from "/C.png";
import Java from "/java.png";
import Js from "/Js.png";
import Mongo from "/mongo.png";
import Express from "/express.png";
import ReactLogo from "/react.png";
import Node from "/Node.png";
import Tailwind from "/tailwind.png";
import Git from "/git.png";

const skills = [
  { name: "C Language", img: C },
  { name: "Java", img: Java },
  { name: "JavaScript", img: Js },
  { name: "MongoDB", img: Mongo },
  { name: "ExpressJs", img: Express },
  { name: "ReactJs", img: ReactLogo },
  { name: "NodeJs", img: Node },
  { name: "Tailwind CSS", img: Tailwind },
  { name: "Git & GitHub", img: Git },
];

export const Skills = () => {
  const scrollingSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-12">
      <p className="text-5xl sm:text-6xl md:text-7xl text-white mb-8 text-center pb-40">SKILLS</p>

      {/* Bento Grid on Mobile */}
      <div className="grid grid-cols-3 gap-4 px-4 sm:hidden">
        {skills.map((skill, idx) => (
          <Card
            key={idx}
            bg="transparent"
            textColor="white"
            borderColor="white"
            shadowColor="black"
            className="flex flex-col items-center justify-center p-3"
          >
            <img src={skill.img} alt={skill.name} className="h-16 mb-2 object-contain" />
            <p className="text-center text-xs">{skill.name}</p>
          </Card>
        ))}
      </div>

      {/* Scrolling Skills for sm and up */}
      <div className="hidden sm:block">
        {/* Shadow edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent"></div>

        {/* Scroll container */}
        <div className="w-full overflow-hidden">
          <div className="whitespace-nowrap flex gap-8 animate-scroll">
            {scrollingSkills.map((skill, idx) => (
              <Card
                bg="transparent"
                textColor="white"
                borderColor="white"
                shadowColor="black"
                key={idx}
                className="w-[200px] p-4 shrink-0"
              >
                <div className="w-full h-48 flex items-center justify-center">
                  <Card
                    className="p-4 h-36 flex justify-center items-center"
                    textColor="white"
                    borderColor="white"
                    shadowColor="black"
                  >
                    <img src={skill.img} alt={skill.name} className="h-full object-contain" />
                  </Card>
                </div>
                <p className="pt-4 text-xl text-white text-center">{skill.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
