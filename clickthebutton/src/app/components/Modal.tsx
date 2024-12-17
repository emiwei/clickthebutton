import Link from "../../../node_modules/next/link";

export default function Modal() {
  return (
    <div className="h-1/2 w-1/3 bg-white fixed z-10 rounded-lg shadow-lg flex flex-col justify-between p-6">
      <div className="h-full flex justify-center items-center">
        <span className="text-lg font-bold">You clicked the button!</span>
      </div>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Restart</button>
        <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" href="./">Home</Link>
      </div>
    </div>
  );
}
