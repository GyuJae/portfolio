import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

interface IProject {
  id: number;
  siteImg: string;
  title: string;
  categories: string[];
  githubURL: string;
  websiteURL?: string;
}

const data: IProject[] = [
  {
    id: 1,
    siteImg: "/projects/youtube.png",
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
    siteImg: "/projects/twitter.png",
    title: "Twitter",
    categories: ["ReactJS", "Firebase"],
    githubURL: "https://github.com/GyuJae/twitter",
    websiteURL: "https://elated-minsky-075955.netlify.app/#/",
  },
  {
    id: 3,
    siteImg: "/projects/misemise.png",
    title: "MiseMise App",
    categories: ["React Native", "Expo"],
    githubURL: "https://github.com/GyuJae/misemise",
    websiteURL: "https://expo.dev/@gyujae/misemiseandweather",
  },
  {
    id: 4,
    siteImg: "/projects/uber-eats.png",
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
  },
  {
    id: 5,
    siteImg: "/projects/carrot-market.png",
    title: "Carrot Market",
    categories: ["NextJS", "Prisma", "Tailwind", "Serverless"],
    githubURL: "https://github.com/GyuJae/carrot-merket",
  },
  {
    id: 6,
    siteImg: "/projects/netflix.png",
    title: "NetFlix",
    categories: ["ReactJS", "Framer Motion", "Recoil", "React Query"],
    githubURL: "https://github.com/GyuJae/nomflix",
    websiteURL: "https://suspicious-easley-55fe47.netlify.app",
  },
  {
    id: 7,
    siteImg: "/projects/JobScrapper.png",
    title: "Job Scrapper",
    categories: ["ReactJS", "Golang"],
    githubURL:
      "https://github.com/GyuJae/job-scrapper-backend , https://github.com/GyuJae/jobscrapper_web",
    websiteURL: "https://angry-montalcini-0dbb83.netlify.app/",
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
          <motion.div className="h-80 w-[full] relative bg-[#1c1c1e] rounded-sm z-[2]">
            <Image
              src={project.siteImg}
              alt="siteImg"
              layout="fill"
              className="absolute object-contain"
            />
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
                  <span className="text-xs cursor-pointer hover:underline z-50">
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
                className=" h-48 relative bg-gray-300 shadow-sm rounded-md hover:shadow-lg cursor-pointer"
                onClick={() => {
                  router.push(`/?id=${item.id}`, undefined, { scroll: false });
                }}
              >
                <Image
                  src={item.siteImg}
                  className="absolute object-cover rounded-md"
                  layout="fill"
                  alt="siteImg"
                />
              </motion.div>
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
