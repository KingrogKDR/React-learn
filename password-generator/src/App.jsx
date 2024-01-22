import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const[length, setLength] = useState(8)
  const[numAllowed, setNumAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i=1; i<=length; i++){
      let index = Math.floor(Math.random()* str.length + 1);
      pass += str.charAt(index)
    }

    setPassword(pass)

  }, [length, charAllowed, numAllowed, setPassword])  // callback used for optimization by storing in cache

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,8);//
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator]) // effect used for executing


  return (
    <>
      <div className="w-full h-screen bg-slate-900 flex flex-wrap justify-center">
        <div className="bg-slate-700 inset-x-8 w-2/5 max-h-32 flex flex-wrap mt-8 rounded-2xl">
          <div className="py-2 my-1 h-20 rounded-2xl flex flex-wrap justify-center w-full">
            <input type="text" className="w-10/12 rounded-l-xl py-2 shadow-sm shadow-indigo-300 outline-none pl-4 text-orange-400 font-bold text-lg" readOnly value={password} ref={passwordRef}/>
            <button className="bg-blue-400 px-4 py-2 rounded-r-xl text-white text-center font-bold hover:opacity-80 hover:outline-blue-600 active:border-blue-700 active:border-2 active:opacity-50 shadow-sm shadow-indigo-300" onClick={copyToClipboard}>copy</button>
          </div>
          <div className="px-8 mx-3 max-h-4 w-full flex flex-wrap justify-start">
            <div className="flex gap-x-3 items-center mr-4">
              <input type="range" min={8} max={30} value={length} className="mb-4 cursor-pointer" 
              onChange={(event)=>setLength(event.target.value)} />
              <label className="text-white mb-4 mr-4">Length ({length})</label>
            </div>
            <div className="mr-4 space-x-2">
              <input type="checkbox" className="mb-4" id="numbers" defaultChecked={numAllowed} 
              onChange={() => setNumAllowed((prev) => !prev)} />
              <label htmlFor="numbers" className="text-white mb-4 mr-4">Numbers</label>
            </div>
            <div className="ml-4 space-x-2">
              <input type="checkbox" className="mb-4" id="characters" defaultChecked={charAllowed} 
              onChange={() => setCharAllowed((prev) => !prev)} />
              <label htmlFor="characters" className="text-white mb-4">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
