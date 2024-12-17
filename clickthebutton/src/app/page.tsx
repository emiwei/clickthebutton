import Link from "../../node_modules/next/link";
export default function Home() {
  const levels = [
    {path: "./clickthebutton/", title: "click the button"},
    {path: "./itstoodark", title: "it's too dark"},
    {path: "./toomanybuttons", title: "too many buttons"},
    {path: "./itstoodarkharder", title: "it's too dark (but harder)"}
  ]
  return (
    <div className="h-screen flex flex-col items-center p-10">
      <div className="mt-4 mb-10">
        <span className="bold text-2xl">Click the button</span>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        {levels.map((level, index) => (
          <Link
          key={index}
          href={level.path}
          className="p-4 rounded-md bg-gray-700 text-white hover:bg-gray-600 text-center">
            {level.title}
          </Link>
        ))} 
      </div>
      
    </div>
  );
}
