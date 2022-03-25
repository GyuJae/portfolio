import CardContainer from "@compoents/CardContainer";
import Contact from "@compoents/Contact";
import ContentLayout from "@compoents/ContentLayout";
import Education from "@compoents/Education";
import IndexHead from "@compoents/IndexHead";
import NomadCoder from "@compoents/NomadCoder";
import Projects from "@compoents/Projects";
import Stack from "@compoents/Stack";

import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <IndexHead />
      <div className="h-44 bg-black relative">
        <div className="w-28 h-28 rounded-md bg-gray-300 absolute -bottom-14 left-[20%]">
          <Image
            src={"/avatar.jpg"}
            className="absolute object-cover rounded-md"
            layout="fill"
            alt="siteImg"
          />
        </div>
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
