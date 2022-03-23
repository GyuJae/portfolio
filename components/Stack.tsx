import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { cls } from "@libs/utills";

interface IStackItem {
  stackName: string;
  stackInfs: string[];
}

const stackData: IStackItem[] = [
  {
    stackName: "Javascript / Typescript",
    stackInfs: [
      "Javascript or Typescript를 이용하여 Web을 만들어 본 경험이 있습니다.",
      "프론트엔드 HTML, CSS3, Pug와 백엔드 NodeJS, MongoDB, Express를 활용하여 Youtube Clone 코딩을 한 경험이 있습니다.",
      "개발문서를 읽고 원하는 기능을 개발할 수 있습니다.",
    ],
  },
  {
    stackName: "NestJS",
    stackInfs: [
      "Nest JS를 사용하여 Web을 만들어 본 경험이 있습니다.",
      "주로 Prisma, Graphql, PlantScale과 함께 사용하고 있습니다.",
      "개발문서를 읽고 원하는 기능을 개발할 수 있으며 제일 자주 사용하는 NodeJS Framework 입니다.",
    ],
  },
  {
    stackName: "React / NextJS",
    stackInfs: [
      "주로 React Native을 통해 Native App를 개발합니다.",
      "React Native를 이용하여 애플리케이션을 만들어본 경험이 있습니다.",
      "expo를 이용하여 함께 개발을 합니다.",
    ],
  },
  {
    stackName: "React Native",
    stackInfs: [
      "주로 ReactJS을 통해 Frontend를 개발합니다.",
      "CSS 작업을 할 때에는 Tailwindcss 또는 Styled Components를 사용합니다.",
      "NextJs만을 사용하여 Fullstack web 개발해 본 경험이 있습니다.",
    ],
  },
  {
    stackName: "Git",
    stackInfs: ["Git을 활용한 소스코드 버전 관리 및 협업을 할 수 있습니다."],
  },
];

const StackItem: React.FC<IStackItem> = ({ stackName, stackInfs }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.li
      layout
      initial={{ borderRadius: 10 }}
      className="bg-gray-200 p-4"
    >
      <motion.div
        onClick={() => setIsOpen((prev) => !prev)}
        className={cls(
          "text-base font-semibold cursor-pointer",
          isOpen ? "mb-2" : ""
        )}
        layout
      >
        {stackName}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm flex flex-col text-gray-600"
          >
            {stackInfs.map((inf, idx) => (
              <motion.span key={idx}>{inf}</motion.span>
            ))}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const Stack = () => {
  return (
    <div>
      <span className="text-lg font-semibold">🛠️ Stacks 기술 스택</span>
      <AnimateSharedLayout>
        <motion.ul layout className="px-4 mt-7 space-y-6">
          {stackData.map((stack) => (
            <StackItem key={stack.stackName} {...stack} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
};

export default Stack;
