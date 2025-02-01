import { useState } from "react";
import NewProject from "../components/NewProject";
import NoProjects from "../components/NoProjects";
import ProjectSideBar from "../components/ProjectSideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

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
    projectContent = <NewProject onStartedAdded={handleOnStartAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    projectContent = <NoProjects onStartedAdded={handleOnStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar onStartedAdded={handleOnStartAddProject} />
        {projectContent}
      </main>
    </>
  );
}

export default App;
