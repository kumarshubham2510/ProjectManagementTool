export default function Projects({ children, ...props }) {
  return (
    <li {...props} className="bg-stone-800 my-3 px-4 text-s">
      {children}
    </li>
  );
}
