import NewProject from "../components/NewProject";
import NoProjects from "../components/NoProjects";
import ProjectSideBar from "../components/ProjectSideBar";

import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSave(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const handleOnStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  let projectContent;

  if (projectState.selectedProjectId === null) {
    projectContent = (
      <NewProject
        onSave={handleSave}
        onStartedAdded={handleOnStartAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    projectContent = <NoProjects onStartedAdded={handleOnStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar
          projects={projectState.projects}
          onStartedAdded={handleOnStartAddProject}
        />
        {projectContent}
      </main>
    </>
  );
}

export default App;
