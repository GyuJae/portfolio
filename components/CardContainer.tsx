import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const projectVariants: Variants = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface ICardContainer {
  children: React.ReactNode;
  isProjects?: boolean;
}

const CardContainer: React.FC<ICardContainer> = ({
  children,
  isProjects = false,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={isProjects ? projectVariants : cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default CardContainer;
