import NewProject from "../components/NewProject";
import NoProjects from "../components/NoProjects";
import ProjectSideBar from "../components/ProjectSideBar";

import { useState } from "react";
import SelectedProject from "../components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(inputText) {
    setProjectState((prevState) => {
      const newTask = {
        text: inputText,
        id: Math.random(),
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((curr) => curr.id != id),
      };
    });
  }

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
  const handleCancel = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  let projectContent;

  if (projectState.selectedProjectId === null) {
    projectContent = (
      <NewProject
        onSave={handleSave}
        onStartedAdded={handleOnStartAddProject}
        onCancel={handleCancel}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    projectContent = <NoProjects onStartedAdded={handleOnStartAddProject} />;
  } else {
    projectContent = (
      <SelectedProject
        onDelete={handleDelete}
        project={projectState.projects.find(
          (curr) => curr.id === projectState.selectedProjectId
        )}
        onAddTask={handleAddTask}
        onDeleteTasks={handleDeleteTask}
        tasks={projectState.tasks}
      />
    );
  }

  function handleSelectProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDelete() {
    setProjectState((prevState) => {
      return {
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (curr) => curr.id != prevState.selectedProjectId
        ),
      };
    });
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar
          projects={projectState.projects}
          onStartedAdded={handleOnStartAddProject}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectState.selectedProjectId}
        />
        {projectContent}
      </main>
    </>
  );
}

export default App;
