import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-900 bg-stone-50 px-6 py-2 rounded-md font-normal">
            Cancel
          </button>
        </li>

        <li>
          <button className="bg-stone-800 text-stone-50 px-6 py-2 rounded-md font-normal hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" isTextArea />
        <Input label="Due Date" type="date" />
      </div>
    </div>
  );
}
