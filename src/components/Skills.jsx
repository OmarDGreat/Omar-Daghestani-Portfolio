import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiMongoose,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiNpm,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiDocker,
} from "react-icons/si";

const frontendTechnologies = [
  { icon: <FaReact size={50} className="text-blue-400" />, name: "React.js / React Native" },
  { icon: <SiJavascript size={50} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript size={50} className="text-blue-500" />, name: "TypeScript" },
  { icon: <SiHtml5 size={50} className="text-orange-500" />, name: "HTML5" },
  { icon: <SiCss3 size={50} className="text-blue-500" />, name: "CSS3" },
  { icon: <SiTailwindcss size={50} className="text-teal-400" />, name: "Tailwind CSS" },
  { icon: <SiBootstrap size={50} className="text-purple-600" />, name: "Bootstrap" },
  { icon: <SiJquery size={50} className="text-blue-600" />, name: "jQuery" },
  { icon: <FaGitAlt size={50} className="text-orange-500" />, name: "Git" },
  { icon: <SiNpm size={50} className="text-red-500" />, name: "npm" },
];

const backendTechnologies = [
  { icon: <FaNodeJs size={50} className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress size={50} className="text-gray-500" />, name: "Express.js" },
  { icon: <SiMysql size={50} className="text-blue-400" />, name: "MySQL" },
  { icon: <SiMongodb size={50} className="text-green-400" />, name: "MongoDB" },
  { icon: <SiMongoose size={50} className="text-red-500" />, name: "Mongoose" },
  { icon: <SiGraphql size={50} className="text-pink-500" />, name: "GraphQL" },
  { icon: <SiDocker size={50} className="text-blue-500" />, name: "Docker" },
];

// Reusable component for displaying skill sets
const SkillList = ({ title, skills }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-semibold text-center mb-6">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
      {skills.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
          aria-label={tech.name}
        >
          {tech.icon}
          <p className="mt-2 text-lg">{tech.name}</p>
        </div>
      ))}
    </div>
  </div>
);

function Skills() {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-20 min-h-[80vh]" id="skills">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-20">My Skills</h2>
        <SkillList title="Frontend Technologies" skills={frontendTechnologies} />
        <SkillList title="Backend Technologies" skills={backendTechnologies} />
      </div>
    </section>
  );
}

export default Skills;
