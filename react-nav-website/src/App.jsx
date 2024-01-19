function App() {
  return (
    <>
      <nav>
        <div className="flex space-x-7 p-4 items-center">
          {/* logo and bold text */}
          <div className="flex space-x-2 items-center">
            <div className="h-full w-8">
              <img src="../assets/spiro.svg"></img>
            </div>
            <div>
              <span className="font-bold">React Navigation</span>
            </div>
          </div>
          {/* extended links */}
          <div className="space-x-6 font-medium flex">
            <a>Docs</a>
            <a>Blog</a>
            <a>Help</a>
            <div>
              <a>7.x</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
