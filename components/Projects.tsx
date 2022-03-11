import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { selectProjectState } from "providers/SelectProject";
import { useRecoilState, useRecoilValue } from "recoil";

const Item = () => {
  const [id, setId] = useRecoilState(selectProjectState);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
        onClick={() => setId(null)}
      ></motion.div>
      <div className="project-content-container open">
        <motion.div
          className="project-content"
          layoutId={`project-container-${id}`}
        >
          <motion.div className="h-80 w-[full] bg-gray-300 rounded-sm z-[1]">
            Project Image
          </motion.div>
          <motion.div className="w-[full] text-white shadow-sm rounded-sm z-[1]">
            <motion.div className="px-4 py-2 flex flex-col space-y-2">
              <motion.span className="text-lg font-semibold">Title</motion.span>
              <motion.ul className="flex space-x-4">
                <motion.li className="text-xs bg-red-200 text-red-600 font-semibold p-1 rounded-md">
                  nestJS
                </motion.li>
                <motion.li className="text-xs bg-red-200 text-red-600 font-semibold p-1 rounded-md">
                  graphql
                </motion.li>
                <motion.li className="text-xs bg-red-200 text-red-600 font-semibold p-1 rounded-md">
                  tailwindcss
                </motion.li>
              </motion.ul>
              <motion.span className="text-sm">
                <span className="font-semibold">😺 Github: </span>{" "}
                <span className="text-xs">https://github.com/GyuJae</span>
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

const Projects = () => {
  const [id, setId] = useRecoilState(selectProjectState);
  return (
    <div>
      <AnimateSharedLayout>
        <span className="text-lg font-semibold">👨‍💻 Projects</span>
        <div className="px-4 grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <motion.div
              key={item}
              layoutId={`project-container-${item}`}
              className=" h-48 bg-gray-300 shadow-sm rounded-md hover:shadow-lg cursor-pointer"
              onClick={() => setId(item)}
            />
          ))}
          <AnimatePresence>{id && <Item />}</AnimatePresence>
        </div>
      </AnimateSharedLayout>
    </div>
  );
};

export default Projects;
