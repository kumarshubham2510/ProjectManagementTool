import Projects from "./Projects";
import Button from "./Button";

export default function ProjectSideBar({
  onStartedAdded,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartedAdded}> + Add Project</Button>
      <ul className="mt-8">
        {projects.map((curr) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";

          if (curr.id == selectedProjectId) {
            cssClasses += " text-stone-200 bg-stone-800";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={curr.id}>
              <button
                onClick={() => {
                  onSelectProject(curr.id);
                }}
                className={cssClasses}
              >
                {curr.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
