import { useState } from "react"



function App() {
  const [color, setColor] = useState("black")
  return (
    <>
      <div className="w-full h-screen" style={{background: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-3">
          <div className="flex flex-wrap justify-center bg-white dark:bg-teal-400 px-4 py-2 rounded-3xl gap-3">
            <button className="bg-red-700 px-3 py-1 text-white rounded-2xl"
            onClick={() => setColor("rgb(185 28 28)")}>Red</button>
            <button className="bg-orange-500 px-3 py-1 text-white rounded-2xl"
            onClick={() => setColor("rgb(249 115 22)")}>Orange</button>
            <button className="bg-yellow-500 px-3 py-1 text-white rounded-2xl"
            onClick={() => setColor("rgb(245 158 11)")}>Yellow</button>
            <button className="bg-green-700 px-3 py-1 text-white rounded-2xl"
            onClick={() => setColor("rgb(21 128 61)")}>Green</button>
            <button className="bg-blue-400 px-3 py-1 text-white rounded-2xl"
            onClick={() => setColor("rgb(96 165 250)")}>Blue</button>
            <button className="bg-indigo-600 px-3 py-1 text-white rounded-2xl"
            onClick={() => setColor("rgb(79 70 229)")}>Indigo</button>
            <button className="bg-purple-500 px-3 py-1 text-white rounded-2xl"
            onClick={() => setColor("rgb(168 85 247)")}>Purple</button>
            <button className="bg-violet-700 px-3 py-1 text-white rounded-2xl"
            onClick={() => setColor("rgb(109 40 217)")}>Violet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
