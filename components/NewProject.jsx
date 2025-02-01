import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ onSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSaved = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueData = dueDate.current.value;
    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueData,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-900 bg-stone-50 px-6 py-2 rounded-md font-normal">
            Cancel
          </button>
        </li>

        <li>
          <button
            onClick={handleSaved}
            className="bg-stone-800 text-stone-50 px-6 py-2 rounded-md font-normal hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" isTextArea />
        <Input ref={dueDate} label="Due Date" type="date" />
      </div>
    </div>
  );
}
