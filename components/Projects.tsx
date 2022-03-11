import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

interface IProject {
  id: number;
  video: string;
  title: string;
  categories: string[];
  githubURL: string;
  websiteURL?: string;
}

const data: IProject[] = [
  {
    id: 1,
    video: "",
    title: "Youtube",
    categories: [
      "Pug",
      "HTML5",
      "CSS3",
      "Typescript",
      "NodeJS",
      "MongoDB",
      "Express",
    ],
    githubURL: "https://github.com/GyuJae/youtube",
  },
  {
    id: 2,
    video: "",
    title: "Twitter",
    categories: ["ReactJS", "Firebase"],
    githubURL: "https://github.com/GyuJae/twitter",
    websiteURL: "https://elated-minsky-075955.netlify.app/#/",
  },
  {
    id: 3,
    video: "",
    title: "MiseMise App",
    categories: ["React Native", "Expo"],
    githubURL: "https://github.com/GyuJae/misemise",
    websiteURL: "https://expo.dev/@gyujae/misemiseandweather",
  },
  {
    id: 4,
    video: "",
    title: "Uber Eats",
    categories: [
      "NestJS",
      "Grapqhql",
      "Prisma",
      "Tailwind",
      "Serverless",
      "NextJS",
    ],
    githubURL:
      "https://github.com/GyuJae/uber-eats-web , https://github.com/GyuJae/uber-eats-backend",
    websiteURL: "https://expo.dev/@gyujae/misemiseandweather",
  },
  {
    id: 5,
    video: "",
    title: "Carrot Market",
    categories: ["NextJS", "Prisma", "Tailwind", "Serverless"],
    githubURL: "https://github.com/GyuJae/carrot-merket",
    websiteURL: "https://expo.dev/@gyujae/misemiseandweather",
  },
];

const Item: React.FC<IProject> = (project) => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
        onClick={() => router.push("/", undefined, { scroll: false })}
      ></motion.div>
      <div className="project-content-container open z-10">
        <motion.div
          className="project-content"
          layoutId={`project-container-${id}`}
        >
          <motion.div className="h-80 w-[full] bg-gray-300 rounded-sm z-[2]">
            Project Image
          </motion.div>
          <motion.div className="w-[full] text-white shadow-sm rounded-sm z-[2]">
            <motion.div className="px-4 py-2 flex flex-col space-y-2">
              <motion.span className="text-lg font-semibold">
                {project.title}
              </motion.span>
              <motion.ul className="flex space-x-4">
                {project.categories.map((category, idx) => (
                  <motion.li
                    key={idx + category}
                    className="text-xs bg-gray-300 text-gray-800 font-semibold p-1 rounded-md"
                  >
                    {category}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.span className="text-sm ">
                <a
                  target="_blank"
                  href={project.githubURL}
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold">😺 Github: </span>{" "}
                  <span className="text-xs cursor-pointer hover:underline">
                    {project.githubURL}
                  </span>
                </a>
              </motion.span>
              {project.websiteURL && (
                <motion.span className="text-sm ">
                  <a
                    target="_blank"
                    href={project.websiteURL}
                    rel="noopener noreferrer"
                  >
                    <span className="font-semibold">🖥️ Site: </span>{" "}
                    <span className="text-xs">{project.websiteURL}</span>
                  </a>
                </motion.span>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

const Projects = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <div>
      <AnimateSharedLayout>
        <span className="text-lg font-semibold">👨‍💻 Projects</span>
        <div className="px-4 grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2">
          {data.map((item) => (
            <div key={item.id}>
              <motion.div
                key={item.id}
                layoutId={`project-container-${item.id}`}
                className=" h-48 bg-gray-300 shadow-sm rounded-md hover:shadow-lg cursor-pointer"
                onClick={() => {
                  router.push(`/?id=${item.id}`, undefined, { scroll: false });
                }}
              />
              {id && (
                <AnimatePresence>
                  <Item {...data.filter((project) => project.id === +id)[0]} />
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </AnimateSharedLayout>
    </div>
  );
};

export default Projects;
