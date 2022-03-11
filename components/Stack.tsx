import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

interface IStackItem {
  stackName: string;
  stackInfs: string[];
}

const stackData: IStackItem[] = [
  {
    stackName: "Javascript / Typescript",
    stackInfs: [
      "Swift를 사용하여 iOS 앱을 개발해 본 경험이 있습니다.",
      "Swift에서 지향하는 객체지향, 함수형 프로그래밍에 대해 이해하고 있습니다.",
      "개발문서를 읽고 원하는 기능을 개발할 수 있습니다.",
    ],
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
        className="text-base font-semibold cursor-pointer mb-2"
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
        <motion.ul layout className="px-4 mt-7 space-y-10">
          {stackData.map((stack) => (
            <StackItem key={stack.stackName} {...stack} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
};

export default Stack;
