import img from "../src/assets/no-projects.png";
import Button from "./Button";

export default function NoProjects({ onStartedAdded }) {
  return (
    <section className="w-2/3 mt-24 text-center">
      <img src={img} className="w-16 h-16 object-contain mx-auto"></img>
      <h2 className="text-xl font-bold font-stone-400 my-4">
        No Projects Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartedAdded}>Create a new project</Button>
      </p>
    </section>
  );
}
