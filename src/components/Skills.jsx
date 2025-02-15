import { FaReact, FaGitAlt, FaNodeJs, FaGithub, FaAws } from "react-icons/fa";
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
  SiFirebase,
  SiRedux,
  SiNextdotjs,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { icon: <FaReact />, name: "React.js", color: "#61DAFB" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
      { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
      { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38B2AC" },
      { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
      { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
      { icon: <SiExpress />, name: "Express.js", color: "#ffffff" },
      { icon: <SiGraphql />, name: "GraphQL", color: "#E535AB" },
      { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
      { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Tools and technologies for deployment and development",
    skills: [
      { icon: <FaGithub />, name: "GitHub", color: "#ffffff" },
      { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
      { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
      { icon: <FaAws />, name: "AWS", color: "#FF9900" },
      { icon: <SiVercel />, name: "Vercel", color: "#ffffff" },
      { icon: <SiNpm />, name: "npm", color: "#CB3837" },
    ],
  },
];

const SkillIcon = ({ skill }) => (
  <div className="group relative">
    <div
      className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg 
                 hover:shadow-xl transform hover:-translate-y-1 
                 transition-all duration-300 ease-in-out"
      style={{
        borderBottom: `3px solid ${skill.color}`,
      }}
    >
      <div
        className={`text-4xl mb-2 transition-transform duration-300 group-hover:scale-110
                   ${
                     skill.color === "#ffffff"
                       ? "dark:text-white text-black"
                       : ""
                   }`}
        style={{ color: skill.color !== "#ffffff" ? skill.color : undefined }}
      >
        {skill.icon}
      </div>
      <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {skill.name}
      </span>
    </div>
  </div>
);

const SkillCategory = ({ category }) => (
  <div className="mb-16">
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
        {category.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {category.skills.map((skill, index) => (
        <SkillIcon key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical expertise and the technologies I work
            with daily
          </p>
        </div>

        <div className="space-y-20">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
