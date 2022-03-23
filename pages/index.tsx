import CardContainer from "@compoents/CardContainer";
import Contact from "@compoents/Contact";
import ContentLayout from "@compoents/ContentLayout";
import Education from "@compoents/Education";
import IndexHead from "@compoents/IndexHead";
import NomadCoder from "@compoents/NomadCoder";
import Projects from "@compoents/Projects";
import Stack from "@compoents/Stack";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="">
      <IndexHead />
      <div className="h-44 bg-black relative">
        <div className="w-24 h-24 rounded-full bg-gray-300 absolute -bottom-12 left-[20%]" />
      </div>
      <ContentLayout>
        <CardContainer>
          <Contact />
        </CardContainer>
        <CardContainer>
          <Stack />
        </CardContainer>
        <CardContainer isProjects>
          <Projects />
        </CardContainer>
        <CardContainer>
          <Education />
        </CardContainer>
        <CardContainer>
          <NomadCoder />
        </CardContainer>
      </ContentLayout>
    </div>
  );
};

export default Home;
