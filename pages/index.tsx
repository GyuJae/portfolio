import Contact from "@compoents/Contact";
import ContentLayout from "@compoents/ContentLayout";
import Education from "@compoents/Education";
import IndexHead from "@compoents/IndexHead";
import Projects from "@compoents/Projects";
import Stack from "@compoents/Stack";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="">
      <IndexHead />
      <div className="h-44 bg-black relative">
        <div className="w-24 h-24 rounded-full bg-red-500 absolute -bottom-12 left-[20%]" />
      </div>
      <ContentLayout>
        <Contact />
        <Stack />
        <Projects />
        <Education />
        <div>
          <span className="text-lg font-semibold">🔔 Nomad Coder</span>
        </div>
      </ContentLayout>
    </div>
  );
};

export default Home;
