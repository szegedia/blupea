import * as React from "react";
import classNames from "classnames";
import Layout from "@components/Layout/LayoutComponent";
import styles from "./Projects.module.css";
import useProjects from "./useProject";
import MainCarousel from "./MainCarousel";
import ThumbCarousel from "./ThumbCarousel";

const ProjectsComponent = () => {
  const { projectsData } = useProjects();
  const [mainIndex, setMainIndex] = React.useState(0);
  const currentProject = React.useMemo(() => projectsData[mainIndex], [
    projectsData,
    mainIndex,
  ]);
  const orderNumber = `0${mainIndex + 1}`.slice(-2);

  return (
    <Layout name="projects" className="px-10 md:px-0">
      <div className="flex flex-col lg:flex-row mb-8">
        <section className="lg:w-1/3 lg:px-24">
          <p className="font-thin text-3xl text-gray-400 mb-4">{orderNumber}</p>
          <h3>{currentProject.title}</h3>
          <p>{currentProject.desc}</p>
        </section>
        <section className={classNames("lg:w-2/3 mb-8", styles.mainCarousel)}>
          <MainCarousel currentProject={currentProject} />
        </section>
      </div>
      <div>
        <ThumbCarousel
          projectsData={projectsData}
          currentIndex={mainIndex}
          onChange={setMainIndex}
        />
      </div>
    </Layout>
  );
};

export default ProjectsComponent;
